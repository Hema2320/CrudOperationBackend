const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  isVerified: {
    type: Boolean,
  },
  // userOwner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "UserSchema",
  //   required: true,
  // },
});

const authModel = new mongoose.model("studentUser", authSchema);
module.exports = authModel;

// export const authModel = mongoose.model("authSchema",authSchema)