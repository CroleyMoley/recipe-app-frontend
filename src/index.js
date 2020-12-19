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
    ingredientForm.innerHTML += `<input type="text"><input type="sumbit>`
    
    li.append(p, ingredientForm)

    recipeList.appendChild(li)
}