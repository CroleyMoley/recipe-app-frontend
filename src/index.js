const recipeForm = document.getElementById("recipe-form")
const recipeInput = document.getElementById("recipe-input")
const recipeList = document.getElementById("recipe-list")

recipeForm.addEventListener("submit", submitRecipe)

function submitRecipe(e) {
    e.preventDefault()
    console.log(e.target.children[0].value)
    const li = document.createElement('li')
    const p = document.createElement('p')
    p.innerText = recipeInput.value
    

    const ingredientForm = document.createElement('form')
    ingredientForm.innerHTML += `<input type="text" id="ingredient-input"><input type="sumbit>`
    
    ingredientForm.addEventListener("submit", submitIngredient)

    li.append(p, ingredientForm)
    recipeList.appendChild(li)

    recipeForm.reset()
}

function submitIngredient(e) {
    e.preventDefault()
    const ingredientInput = e.target.children[0].value
    console.log(e.target)
}