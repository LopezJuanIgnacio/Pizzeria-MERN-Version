const { Router } = require('express');

const router =Router();
const {getPizzas, getPizza, createPizza, deletePizza, updatePizza, getIngredientes, getIngrediente, createIngredientes} = require('../controllers/controllers.js');
router.get('/', getPizzas);
router.get('/Ingredientes', getIngredientes);
router.get('/Ingredientes/:id', getIngrediente);
router.post('/Ingredientes', createIngredientes);
router.get('/:id', getPizza);
router.post('/', createPizza);
router.delete('/:id', deletePizza);
router.post('/:id', updatePizza);


module.exports = router;