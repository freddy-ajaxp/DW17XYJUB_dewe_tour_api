const express = require("express");
const { auth, authAdmin } = require('../middleware/auth');
const router = express.Router();

const { getAllUsers, getUser, storeUser, login, deleteUser, changeProfile} = require("../controllers/database/user");
const { getAllCountries, getCountry, storeCountry, patchCountry, deleteCountry} = require("../controllers/database/country");
const { getAllTrips, getTripByUserId, getTrip, storeTrip, patchTrip, deleteTrip, searchTrip} = require("../controllers/database/trip");
const { getAllTransaction, getTransactionByUserId, getTransaction, storeTransaction, patchTransaction, payTransaction} = require("../controllers/database/transaction");
const { fileUpload, profileUpload } = require("../middleware/fileUpload");

//TABEL USER: get getall post delete checkUser
router.get("/users", auth, getAllUsers);
router.get("/user/:id", getUser);
router.post("/user", storeUser);
router.delete("/user/delete/:id", auth, deleteUser);
router.patch("/user/:id", auth, profileUpload('profile'), changeProfile);
router.post("/login", login);

//TABEL COUNTRIES: get getall post edit delete
router.get("/country", getAllCountries);
router.get("/country/:id", getCountry);
router.post("/country/", auth, storeCountry);
router.patch("/country/:id", auth, patchCountry);
router.delete("/country/:id", auth, deleteCountry);

//TABEL TRIP: get getall post edit delete
router.get("/trips", getAllTrips);
router.get("/trips/:id", getTripByUserId);
router.get("/trip/:id", getTrip);
router.get("/search/", searchTrip);
router.post("/trip/", auth, storeTrip);
router.patch("/trip/:id", auth, patchTrip);
router.delete("/trip/:id", auth, deleteTrip);

//TABEL TRANSACTION: get getall post edit delete
router.get("/transactions", getAllTransaction);
router.get("/transactions/:id", getTransactionByUserId);
router.get("/transaction/:id", getTransaction);
router.post("/transaction/", auth, storeTransaction);
router.patch("/transaction/:id", auth, patchTransaction);
router.patch("/transaction/pay/:id", auth, fileUpload('attachment'), payTransaction);
//UPLOAD 
// router.post("/upload", fileUpload('attachment'), storeTrip);
module.exports = router;