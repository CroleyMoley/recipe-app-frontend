const recipeForm = document.getElementById("recipe-form")

recipeForm.addEventListener("submit", submitRecipe)

function submitRecipe(e) {
    e.preventDefault()
    console.log(e.target.children[0].value)
}