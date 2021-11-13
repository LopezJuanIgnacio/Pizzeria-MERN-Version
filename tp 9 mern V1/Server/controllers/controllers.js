const express = require('express');
const mongoose = require('mongoose');
const Pizza = require("../models/Pizza")
const Ingrediente = require("../models/Ingrediente")
const router = express.Router();

const getPizzas = async (req, res) =>{
    try {
        const pizzas = await Pizza.find()
        return res.status(201).json(pizzas)
    } catch (error) {
        res.status(502).json({ message: error.message });
    }
}

const getPizza = async (req, res) =>{
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
        const pizzas = await Pizza.findById(id)
        return res.status(200).json(pizzas)
    } catch (error) {
        return res.status(502).json({ message: error.message });
    }
}
const createPizza = async (req, res) =>{
    let {Nombre, Precio, Tamaño, UrlFoto, ListaIngredientes} = req.body
    Precio = parseInt(Precio)
    try {
        if (typeof Nombre == 'string' && Nombre.length >= 3 && Nombre.length <= 32 && typeof Precio == 'number' && typeof UrlFoto == 'string' && UrlFoto.length >= 6 && typeof Tamaño == 'string' ) {
            let nuevaListaIngredientes = []
            if (typeof ListaIngredientes == 'object') {
                for (let index = 0; index < ListaIngredientes.length; index++) {
                    nuevaListaIngredientes[index] = await Ingrediente.findById(ListaIngredientes[index]);   
                }
            }
            
            const Pizzaa = new Pizza({Nombre, Precio, Tamaño, UrlFoto, nuevaListaIngredientes});
            await Pizzaa.save();
            return res.status(201).json({ message: 'Created' })
        } else {
            return res.status(400).json({ message: 'Error de Peticion' })
        }
        
    } catch (error) {
        return res.status(502).json({ message: error.message });
    }
    return res.status(400).json({ message: 'Error de Peticion' })
}
const deletePizza = async (req, res) =>{
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
        await Pizza.findByIdAndDelete(id) 
        return res.status(201).json({ message: 'deleted' })
    } catch (error) {
        return res.status(502).json({ message: error.message });
    }
}
const updatePizza = async (req, res) =>{
    const { id } = req.params;
    const {Nombre, Precio, Tamaño, UrlFoto, ListaIngredientes} = req.body
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
        if (typeof Nombre == 'string' && Nombre.length >= 3 && Nombre.length <= 32 && typeof Precio == 'number' && typeof UrlFoto == 'string' && UrlFoto.length >= 6 && typeof Tamaño == 'string' ) {
            const Pizzaa = new Pizza({Nombre, Precio, Tamaño, UrlFoto, ListaIngredientes});
            await Pizza.findByIdAndUpdate(id, {Nombre, Precio, Tamaño, UrlFoto, ListaIngredientes});
            return res.status(201).json({ message: 'Updated' })
        } else {
            return res.status(400).json({ message: 'Error de Peticion' })
        }
        
    } catch (error) {
        return res.status(502).json({ message: error.message });
    }
}
const getIngredientes = async (req, res) =>{
    try {
        const Ingredientes = await Ingrediente.find()
        return res.json(Ingredientes)
    } catch (error) {
        return res.status(502).json({ message: error.message });
    }
}
const getIngrediente = async (req, res) =>{
    const { id } = req.params;
    try {
        const Ingredientes = await Ingrediente.findById(id)
        return res.json(Ingredientes)
    } catch (error) {
        return res.status(502).json({ message: error.message });
    }
}
const createIngredientes = async (req, res) =>{
    const {Nombre, UrlFoto} = req.body
    try {
        if (typeof Nombre == 'string' && Nombre.length >= 3 && Nombre.length <= 32 && typeof UrlFoto == 'string' && UrlFoto.length >= 6 ) {
            const Ingre = new Ingrediente({Nombre, UrlFoto});
            await Ingre.save();
            return res.status(201).json({ message: 'Created' })
        } else {
            return res.status(400).json({ message: 'Error de Peticion' })
        }
        
    } catch (error) {
        return res.status(502).json({ message: error.message });
    }
}
module.exports = {getPizzas, getPizza, createPizza, deletePizza, updatePizza, getIngredientes, getIngrediente , createIngredientes}