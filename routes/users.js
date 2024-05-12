const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb+srv://Tanya:Tanya@cluster0.5f3fdsp.mongodb.net/jalvidyut");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  }
})

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);