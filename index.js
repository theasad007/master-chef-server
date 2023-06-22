const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const chefs = require('./data/data.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/chef', (req, res) => {
    console.log(typeof(chefs))
    res.send(chefs)
})

// Specific Chef by id
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.find(c => parseInt(c.id) === parseInt(id))
    res.send(selectedChef)
})

// Specific Recipe by id

app.get('/chef/:chefId/recipes/:recipeId', (req, res) => {
    const chefId = req.params.chefId;
    const recipesid = req.params.recipeId;
    const selectedChef = chefs.find(c => c.id == chefId);
    const selectedRecipe = selectedChef.recipes.find(c => c.recipeId == recipesid)
    res.send(selectedRecipe)

})















app.listen(port, ()=>{
    console.log('App is Listening in port', port)
})