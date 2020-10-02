require("dotenv").config();

//Init Express
const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const app = express();
//cors
app.use(cors())
//Define Port
const port = process.env.PORT || 5001;

app.use('/uploads', express.static("uploads"))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
 


app.use("/api/", router);

app.listen(port, () => console.log(`Listening on port ${port}`));
