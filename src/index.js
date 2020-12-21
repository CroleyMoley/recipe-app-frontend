const recipeForm = document.getElementById("recipe-form")
const recipeInput = document.getElementById("recipe-input")
const recipeList = document.getElementById("recipe-list")
const recipeUrl = `http://localhost:3000/recipes`

recipeForm.addEventListener("submit", submitRecipe)
//fetch request
function submitRecipe() {
    event.preventDefault()
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            title: recipeInput.value
        })
    }
    fetch(recipeUrl, configObj)
    .then(res => res.json())
    .then(console.log)
    renderRecipe()
}
//render recipe to the dom
function renderRecipe() {
    event.preventDefault()
    const li = document.createElement('li')
    const p = document.createElement('p')
    p.innerText = recipeInput.value
    const ingredientForm = document.createElement('form')
    ingredientForm.innerHTML += `<input type="text" id="ingredient-input"><input type="sumbit>`
    ingredientForm.addEventListener("submit", submitIngredient)
    const ingredientList = document.createElement('ul')
    li.append(p, ingredientForm, ingredientList)
    recipeList.appendChild(li)
    recipeForm.reset()
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