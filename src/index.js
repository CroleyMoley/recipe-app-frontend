const recipeForm = document.getElementById("recipe-form")
const recipeInput = document.getElementById("recipe-input")
const recipeList = document.getElementById("recipe-list")
const recipeUrl = `http://localhost:3000/recipes`

recipeForm.addEventListener("submit", renderRecipe)
//render recipe to the dom
function renderRecipe(e) {
    e.preventDefault()
    console.log(e.target.children[0].value)
    const li = document.createElement('li')
    const p = document.createElement('p')
    p.innerText = recipeInput.value
    console.log(e.target.children[0].value)

    const ingredientForm = document.createElement('form')
    ingredientForm.innerHTML += `<input type="text" id="ingredient-input"><input type="sumbit>`
    
    ingredientForm.addEventListener("submit", submitIngredient)
    const ingredientList = document.createElement('ul')
    li.append(p, ingredientForm, ingredientList)
    recipeList.appendChild(li)

    recipeForm.reset()
}
//fetch request
function submitRecipe() {

}

function submitIngredient(e) {
    e.preventDefault()
    const ingredientInput = e.target.children[0].value
    const ingredientList = e.target.nextElementSibling
    
    const li = document.createElement('li')
    li.innerText = ingredientInput
    ingredientList.appendChild(li)
    e.target.reset()
}