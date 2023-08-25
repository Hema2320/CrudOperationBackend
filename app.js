
require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const router = require("./Routes/router");
const authRoutes = require("./Routes/authRoutes")
const PORT = process.env.PORT || 6010 


app.use(cors());
app.use(express.json());
 app.use("/profilepic",express.static("./profilepic"));
app.use("/files",express.static("./public/files"));

app.use(router);
app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log(`Server start at port no ${PORT}`)
})