const recipeForm = document.getElementById("recipe-form")
const recipeInput = document.getElementById("recipe-input")
const recipeList = document.getElementById("recipe-list")
const recipeUrl = `http://localhost:3000/recipes`
const ingredientUrl = `http://localhost:3000/ingredients`


//get request to see recipes to the DOM
function fetchRecipes() {
    fetch(recipeUrl)
    .then(res => res.json())
    .then(recipes => recipes.forEach(data => renderRecipe(data.data)))
}

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
    .then(data => renderRecipe(data.data))
    
}

//render recipe to the dom
function renderRecipe(recipe) {
    console.log(recipe)
    const li = document.createElement('li')
    li.dataset.id = recipe.id

    const p = document.createElement('p')
    p.innerText = recipe.attributes.title

    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "delete"
    deleteBtn.addEventListener("click", deleteRecipe)

    const ingredientForm = document.createElement('form')
    ingredientForm.innerHTML += `<input type="text" id="ingredient-input"><input type="submit>`
    ingredientForm.addEventListener("submit", renderIngredient)

    const ingredientList = document.createElement('ul')
    recipe.attributes.ingredients.forEach(ingredient => {
        const ingredientLi = document.createElement('ingredientLi')
        li.innerText = ingredient.name
        ingredientList.appendChild(ingredientLi)
    })

    li.append(p, deleteBtn, ingredientForm, ingredientList)
    recipeList.appendChild(li)
    recipeForm.reset()
}

function deleteRecipe(e) {
    const recipeId = e.target.parentElement.dataset.id
    fetch(`${recipeUrl}/${recipeId}`, {
        method: "DELETE"
    })
    e.target.parentElement.remove()
}


function renderIngredient(e) {
    e.preventDefault()
    const ingredientInput = e.target.children[0].value
    const ingredientList = e.target.nextElementSibling
    const recipeId = e.target.parentElement.dataset.id

    const li = document.createElement('li')
    //li.dataset.id = ingredientId
    li.innerText = ingredientInput
    ingredientList.appendChild(li)

    submitIngredient(ingredientInput, recipeId)

    e.target.reset()
}

function submitIngredient(ingredient, recipeId) {
    //console.log(ingredient)
    fetch(ingredientUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: ingredient,
            recipe_id: recipeId
        })
    })
}


fetchRecipes()