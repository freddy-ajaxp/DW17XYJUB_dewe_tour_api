const { Trip: trip } = require("../../models");
const { Country } = require("../../models");
const { Transaction } = require("../../models");
const { ImageTrip } = require("../../models");
const bycript = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");
const { valid } = require("@hapi/joi");
const { Op } = require("sequelize");
const { Sequelize } = require("sequelize");

exports.getAllTrips = async (request, response) => {
  try {
    const trips = await trip.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: Transaction,
          // group: ["userId"],
          attributes: [
            // "id",
            // "tripId",
            [Sequelize.fn("sum", Sequelize.col("counterQty")), "takenTrip"],
            [Sequelize.fn("sum", Sequelize.col("total")), "total"],
          ],
        },
        {
          model: Country,
          attributes: ["nama_negara"],
        },
      ],
      group: ["id"],
    });
    response.status(200).send({
      message: "response Success",
      data: { trips },
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

exports.getAllTripsTotal = async (request, response) => {
  try {
    const trips = await trip.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: Transaction,
          attributes: [
            [Sequelize.fn("sum", Sequelize.col("counterQty")), "takenTrip"],
            [Sequelize.fn("sum", Sequelize.col("total")), "total"],
          ], 

            
        //   attributes: {
        //     include: [
        //         [
        //             // Note the wrapping parentheses in the call below!
        //             sequelize.literal(`(
        //                 SELECT SUM(*)
        //                 FROM reactions AS reaction
        //                 WHERE
        //                     reaction.postId = post.id
        //                     AND
        //                     reaction.type = "Laugh"
        //             )`),
        //             'laughReactionsCount'
        //         ]
        //     ]
        // }
        },
        {
          model: Country,
          attributes: ["nama_negara"],
        },
      ],
      group: ["id"],
    });
    response.status(200).send({
      message: "response Success",
      data: { trips },
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

// jaga2 soalnya mau di edit
// exports.getAllTripsTotal = async (request, response) => {
//   try {
//     const trips = await trip.findAll({
//       attributes: { exclude: ["createdAt", "updatedAt"] },
//       include: [
//         {
//           model: Transaction,
//           // where: {
//           //   status: "Approved",
//           // },
//           // group: ["userId"],
//           attributes: [
//             [Sequelize.fn("sum", Sequelize.col("counterQty")), "takenTrip"],
//             [Sequelize.fn("sum", Sequelize.col("total")), "total"],
//           ],
//         },
//         {
//           model: Country,
//           attributes: ["nama_negara"],
//         },
//       ],
//       group: ["id"],
//     });
//     response.status(200).send({
//       message: "response Success",
//       data: { trips },
//     });
//   } catch (err) {
//     console.log(err);
//     response.status(500).send({
//       error: {
//         message: "Server ERROR",
//       },
//     });
//   }
// };

exports.getTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const detailTrip = await trip.findOne({
      where: {
        id: id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: Country,
          attributes: ["id", "nama_negara"],
        },
        {
          model: ImageTrip,
          attributes: ["id", "gambar1", "gambar2", "gambar3", "gambar4"],
        },
        {
          model: Transaction,
          attributes: [
            [Sequelize.fn("sum", Sequelize.col("counterQty")), "takenTrip"],
            [Sequelize.fn("sum", Sequelize.col("total")), "total"],
          ],
        }
      ],
    });

    if (!detailTrip)
      return res.status(400).send({
        message: `trip with id: ${id} is not existed`,
      });

    res.status(200).send({
      message: "response Success",
      data: {
        detailTrip,
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

exports.storeTrip = async (req, res) => {
  // console.log("isi req.body :")
  // console.log(req.body);
  try {
    const { title } = req.body;
    const tripExist = await trip.findOne({
      where: {
        title: title,
      },
    });
    if (tripExist) {
      return res.status(409).send({
        error: {
          message: "nama trip sudah terdaftar",
        },
      });
    }
    const queryResponse = await trip.create({
      ...req.body,
    });

    res.status(200).send({
      message: "trip baru berhasil ditambahkan",
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

exports.deleteTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const tripFound = await trip.findOne({
      where: {
        id: id,
      },
    });

    if (!tripFound)
      return res.status(400).send({
        message: `trip is not existed`,
      });
    else {
      await trip.destroy({
        where: {
          id: id,
        },
      });
    }
    res.status(200).send({
      message: "trip data is deleted",
      data: { id: id },
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

exports.patchTrip = async (req, res) => {
  try {
    const queryResult = await trip.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send({
      data: {
        message: "trip is successfully updated ",
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

exports.getTripByUserId = async (request, response) => {
  try {
    const { id } = request.params;
    const trips = await trip.findAll({
      group: "Trip.id",
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Country,
        attributes: ["id", "nama_negara"],
      },
      where: {
        user_id: id,
      },
    });
    response.status(200).send({
      message: "response Success",
      data: { trips },
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

exports.searchTrip = async (request, response) => {
  let name = request.query.keyword;
  try {
    const trips = await trip.findAll({
      where: { title: { [Op.like]: "%" + name + "%" } },
      include: {
        model: Country,
        attributes: ["id", "nama_negara"],
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    response.status(200).send({
      message: "response Success",
      data: { trips },
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
