var multer = require("multer");
const upload = multer();
var express = require("express");
var router = express.Router();

exports.fileUpload = (fileName) => {
  let namaFileUpload;
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('isi req', req)
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
		namaFileUpload = 'transaksi_' +req.body.idTransaksi + '_pengguna_'+req.body.idUser +'.JPG';
      cb(null, namaFileUpload);
    },
  });

  const imageFilter = function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
      req.fileValidationError = {
        message: "Only image files are allowed!",
      };
      return cb(new Error("Only image files are allowed!"), false);
    }
    cb(null, true);
  };

  const maxSize = 10 * 1000 * 1000;

  const upload = multer({
    storage,
    fileFilter: imageFilter,
    limits: {
      fileSize: maxSize,
    },
  }).single(fileName);

  return (req, res, next) => {
    //   console.log('req di return fu',req.body)
    upload(req, res, function (err) {
      console.log("breakline 1");
      if (req.fileValidationError)
        return res.status(400).send(req.fileValidationError);
      console.log("breakline 2");
      if (!req.file && !err)
        return res.status(400).send({
          message: "Please select an image to upload",
        });
      console.log("breakline 3");
      if (err) {
        console.log("breakline 4");
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).send({
            message: "Max file sized 10MB",
          });
        }
        console.log("breakline 5");
        return res.status(400).send(err);
      }
	  console.log("breakline 6");
	  req.body.namaFileUpload=namaFileUpload 
      return next();
    });
  };
};

exports.profileUpload = (fileName) => {
  let namaFileUpload;
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // console.log('isi req', req)
      cb(null, "uploads/profile_picture");
    },
    filename: function (req, file, cb) {
		namaFileUpload = 'profile_'+req.body.idUser +'.JPG';
      cb(null, namaFileUpload);
    },
  });

  const imageFilter = function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
      req.fileValidationError = {
        message: "Only image files are allowed!",
      };
      return cb(new Error("Only image files are allowed!"), false);
    }
    cb(null, true);
  };

  const maxSize = 10 * 1000 * 1000;

  const upload = multer({
    storage,
    fileFilter: imageFilter,
    limits: {
      fileSize: maxSize,
    },
  }).single(fileName);

  return (req, res, next) => {
    //   console.log('req di return fu',req.body)
    upload(req, res, function (err) {
      console.log("breakline 1");
      if (req.fileValidationError)
        return res.status(400).send(req.fileValidationError);
      console.log("breakline 2");
      if (!req.file && !err)
        return res.status(400).send({
          message: "Please select an image to upload",
        });
      console.log("breakline 3");
      if (err) {
        console.log("breakline 4");
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).send({
            message: "Max file sized 10MB",
          });
        }
        console.log("breakline 5");
        return res.status(400).send(err);
      }
	  console.log("breakline 6");
	  req.body.namaFileUpload=namaFileUpload 
      return next();
    });
  };
};