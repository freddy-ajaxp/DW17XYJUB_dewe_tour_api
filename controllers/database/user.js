const { user } = require("../../models");
const bycript = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");
const { valid } = require("@hapi/joi");

exports.getAllUsers = async (request, response) => {
  try {
    const users = await user.findAll({
      attributes: {
        exclude: [
          "createdAt",
          "updatedAt"
        ],
      },
    });
    response.status(200).send({
      message: "response Success",
      data: { users },
    });
  } catch (err) {
    console.log(err);
    response.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const detailUser = await user.findOne({
      where: {
        id: id,
      },
    });

    if (!detailUser)
      return res.status(400).send({
        message: `user with id: ${id} is not existed`,
      });

    res.status(200).send({
      message: "response Success",
      data: {
        detailUser,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.storeUser = async (req, res) => {
  try {
    const { fullname, email, password, phone, address, picture, gender} = req.body;
    const emailExist = await user.findOne({
      where: {
        email,
      },
    });

    if (emailExist) {
      return res.status(400).send({
        error: {
          message: "email has been registered",
        },
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bycript.hash(password, saltRounds);

    const createResponse = await user.create({
      fullname: fullname,
      email: email,
      password: hashedPassword,
      phone: phone,
      address: address,
      picture: picture,
      admin: 0,
      gender,

    });

    const secret_key = process.env.SECRET_KEY;
    const token = jwt.sign(
      {
        id: createResponse.id,
      },
      secret_key
    );

    res.status(200).send({
      message: "user baru berhasil didaftarkan",
      data: {
        id: createResponse.id,
        email: createResponse.email,
        token,
        admin: createResponse.admin,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const userFound = await user.findOne({
    where: {
      email: email,
    },
  });
  if (!userFound)
    return res.status(400).send({
      message: `Username or Password is invalid`,
    });
  try {
    const validPass = await bycript.compare(password, userFound.password);

    if (!validPass)
      return res.status(400).send({
        message: `Username or Password is invalid`,
      });

    const token = jwt.sign(
      {
        id: userFound.id,
      },
      process.env.SECRET_KEY
    );
    
    res.status(200).send({
      data: {
        id: userFound.id,
        email: userFound.email,
        token: token,
        admin: userFound.admin,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userFound = await user.findOne({
      where: {
        id: id,
      },
    });

    if (!userFound)
      return res.status(400).send({
        message: `user with id: ${id} is not existed`,
      });

    if (userFound)
      await user.destroy({
        where: {
          id: id,
        },
      });

    res.status(200).send({
      message: "user data is deleted",
      data: { id }, 
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.changeProfile = async (req, res) => {
  // console.log("setelah di next, isi dari request", req);
  console.log("  req.body.namaFileUpload",   req.body.namaFileUpload);
  console.log("   req.params.id",    req.params.id);
  try {
    const newData = {
      picture: req.body.namaFileUpload,
    };
    const queryResult = await user.update(newData, {
      where: {
        id: req.params.id,
      },
    });
    console.log(queryResult);
    return res.status(200).send({
      data: {
        message: "profile is successfully updated ",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      error: {
        message: "Something Happenned, contact Admin",
      },
    });
  }
};