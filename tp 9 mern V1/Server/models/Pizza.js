const mongoose = require("mongoose");
const Ingrediente = require ("./Ingrediente")
const userSchema = mongoose.Schema({
  Nombre: { type: String, required:  true },
  Precio: { type: Number, required: true },
  Tamaño: { type: String, required: true },
  UrlFoto: { type: String, required: true },
  ListaIngredientes: {type: Array, required: true}
});

module.exports =  mongoose.model("Pizza", userSchema);