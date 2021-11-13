const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Nombre: { type: String, required:  true },
  UrlFoto: { type: String, required: true }
});

module.exports =  mongoose.model("Ingrediente", userSchema);