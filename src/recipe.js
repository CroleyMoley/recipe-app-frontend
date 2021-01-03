class Recipe {
    static allRecipes = []

    constructor(recipe){
    this.id = recipe.id
    this.title = recipe.attributes.title
    this.ingredients = recipe.attributes.ingredients
    Recipe.allRecipes.push(this)
}

    static renderRecipes(){
        for (let recipe of this.allRecipes) {
            recipe.renderRecipe()
        }
    }

    static fetchRecipes(){
        fetch(recipeUrl)
        .then(res => res.json())
        .then(recipes => {
            for(let recipe of recipes){
                let newList = new Recipe(recipe.data)
            }
            this.renderRecipes()
        })
    }

    renderRecipe(){
        const li = document.createElement('li')
        li.dataset.id = this.id
        
        const r = document.createElement ('r')
        r.innerText = this.title

        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "delete"
        deleteBtn.addEventListener("click", this.deleteRecipe)

        const ingredientForm = document.createElement('form')
        ingredientForm.innerHTML += `<input type="text" id="ingredient-input"><input type="submit>`
        ingredientForm.addEventListener("submit", Ingredient.createIngredient)

        const ingredientList = document.createElement('ul')
        this.ingredients.forEach(ingredient => {
            let ingredientObj = new Ingredient(ingredient)
            console.log(ingredientObj)
            ingredientObj.renderIngredient(ingredientList)
        })

        li.append(r, deleteBtn, ingredientForm, ingredientList)
        recipeList.appendChild(li)
        recipeForm.reset()
    }

    static submitRecipe(){
        event.preventDefault()
        const configObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: recipeInput.value
            })
        }
        fetch(recipeUrl, configObj)
        .then(res => res.json())
        .then(data => {
            let newRecipe = new Recipe(data.data)
            newRecipe.renderRecipe()
        })
    }

    deleteRecipe(){
        const recipeId = this.parentElement.dataset.id
        fetch(`${recipeUrl}/${recipeId}`, {
            method: "DELETE"
        })
        this.parentElement.remove()
    }
}