var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = Schema(
  {
    name: String,
    lastName: String,
    email: String,
    password: String,
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
