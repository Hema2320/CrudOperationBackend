
const express = require("express");
const authController= require("../Controllers/authController.js");
const checkIsUserAuthenticated = require("../middlewares/authMiddleware.js")
const authrouter = new express.Router();

authrouter.post("/users/register", authController.userRegistration);
authrouter.post("/users/login", authController.userLogin);


authrouter.post("/forget-password", authController.forgetPassword);
authrouter.post("/forget-password/:id/:token", authController.forgetPasswordEmail);


authrouter.get("/verify/:token", authController.saveVerifiedEmail);


authrouter.post(
  "/change-password",
  checkIsUserAuthenticated,
  authController.changePassword
);
module.exports=authrouter;