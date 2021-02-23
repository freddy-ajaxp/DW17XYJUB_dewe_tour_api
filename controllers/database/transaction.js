const { Transaction } = require("../../models");
const { Trip } = require("../../models");
const { Country } = require("../../models");
const { user: User } = require("../../models");
const bycript = require("bcrypt");
const jwt = require("jsonwebtoken");
const { valid } = require("@hapi/joi");
const { Sequelize } = require("sequelize");

exports.getAllTransaction = async (request, response) => {
  try {
    const transactions = await Transaction.findAll({
      order: [["createdAt", "DESC"]],
      group: ["Transaction.id"],
      attributes: { exclude: ["createdAt", "updatedAt", "tripId"] },
      include: [
        {
          model: Trip,
          include: {
            model: Country,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        },
        {
          model: User,
          attributes: ["fullname"],
        },
      ],
    });
    response.status(200).send({
      message: "response Success",
      data: { transactions },
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

exports.getTransactionByUserId = async (request, response) => {
  try {
    const { id } = request.params;
    const transactions = await Transaction.findAll({
      order: [["createdAt", "ASC"]],
      group: "Transaction.id",
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Trip,
        include: {
          model: Country,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        group: "Trip.id",
      },
      where: {
        userId: id,
      },
    });
    response.status(200).send({
      message: "response Success",
      data: { transactions },
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

exports.getTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const detailTransaction = await Transaction.findOne({
      where: {
        id: id,
      },
      include: {
        model: Trip,
        include: {
          model: Country,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      },
      attributes: { exclude: ["createdAt", "updatedAt", "tripId"] },
    });

    if (!detailTransaction)
      return res.status(400).send({
        message: `Transaction with id: ${id} is not existed`,
      });

    res.status(200).send({
      message: "response Success",
      data: {
        detailTransaction,
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

exports.storeTransaction = async (req, res) => {
  try {
    const queryResponse = await Transaction.create({
      ...req.body,
    });

    res.status(200).send({
      message: "transaction baru berhasil ditambahkan",
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

exports.patchTransaction = async (req, res) => {
  try {
    const newData = {
      status: req.body.status,
    };
    const queryResult = await Transaction.update(newData, {
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).send({
      data: {
        message: "transaction is successfully updated ",
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

exports.payTransaction = async (req, res) => {
  try {
    const newData = {
      attachment: req.body.namaFileUpload,
      status: req.body.status,
    };
    const queryResult = await Transaction.update(newData, {
      where: {
        id: req.body.idTransaksi,
      },
    });
    return res.status(200).send({
      data: {
        message: "transaction is successfully updated ",
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
