const recipeForm = document.getElementById("recipe-form")
const recipeInput = document.getElementById("recipe-input")
const recipeList = document.getElementById("recipe-list")
const recipeUrl = `http://localhost:3000/recipes`
const ingredientUrl = `http://localhost:3000/ingredients`

recipeForm.addEventListener("submit", Recipe.submitRecipe)

Recipe.fetchRecipes()


