require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require ("mongoose");
require("./db/conn");
const users = require ("./models/userschema");
const cors = require ("cors");
const router = require ("./routes/router");
const Attendances = require ("./routes/attendanceRoute");
const attendanceRoute = require ("./routes/attendanceRoute");
const loginRoute = require ("./routes/loginRoute");


const port = 8003;
app.use(cors());
app.use(express.json());

app.use('/api', router);
app.use('/api', attendanceRoute);
app.use('/api', loginRoute);



app.listen(port, () =>{
  console.log(`server is start at port number ${port}`);
});