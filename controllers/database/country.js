const { Country: country } = require("../../models");
const bycript = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");
const { valid } = require("@hapi/joi");

exports.getAllCountries = async (request, response) => {
  try {
    const countries = await country.findAll({
      order: [["nama_negara", "ASC"]],
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    response.status(200).send({
      message: "response Success",
      data: { countries },
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

exports.getCountry = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const detailUser = await country.findOne({
      where: {
        id: id,
      },
      attributes:{exclude: ['createdAt', 'updatedAt']}
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

exports.storeCountry = async (req, res) => {
  try {
    console.log(req.body.namaNegara);
    const { namaNegara } = req.body;
    const negaraExist = await country.findOne({
      where: {
        nama_negara: namaNegara,
      },
    });

    if (negaraExist) {
      return res.status(409).send({
        error: {
          message: "nama negara sudah terdaftar",
        },
      });
    }

    const queryResponse = await country.create({
      nama_negara: namaNegara,
    });
    console.log(queryResponse);
    res.status(200).send({
      message: "negara baru berhasil ditambahkan",
      data: {
        id: queryResponse.id,
        name: queryResponse.nama_negara,
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

exports.deleteCountry = async (req, res) => {
try {
  const { id } = req.params;
    const countryFound = await country.findOne({
      where: {
        id: id,
      },
    });

    if (!countryFound)
      return res.status(400).send({
        message: `country is not existed`,
      });

    if (countryFound)
      await country.destroy({
        where: {
          id: id,
        },
      });

    res.status(200).send({
      message: "user data is deleted",
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

exports.patchCountry = async (req, res) => {
  try {
    const id = req.params.id
    const queryResult = await country.update(req.body, {
      where: {
        id: id,
      },
    });
    console.log(queryResult);
    return res.status(200).send({
      message: "country name is successfully updated ",
      data: {id},
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