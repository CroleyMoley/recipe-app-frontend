class Ingredient {

    constructor(ingredient) {
        this.recipe_id = ingredient.recipe_id
        this.name = ingredient.name
        this.id = ingredient.id
    }

    static createIngredient(e){
        e.preventDefault()
        const ingredientInput = e.target.children[0].value
        const ingredientList = e.target.nextElementSibling
        const recipeId = e.target.parentElement.dataset.id

        Ingredient.submitIngredient(ingredientInput, ingredientList, recipeId)

        e.target.reset()
    }

    renderIngredient(ingredientList){
        const li = document.createElement('li')
        li.dataset.id = this.recipe_id
        li.innerText = this.name
        
        const deleteBtn = document.createElement('button')
        deleteBtn.addEventListener("click", this.deleteIngredient)
        deleteBtn.innerText = "X"
        li.appendChild(deleteBtn)
        ingredientList.appendChild(li)

    }

    static submitIngredient(ingredient, ingredientList, recipeId){
        fetch(ingredientUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: ingredient, 
                recipe_id: recipeId
            })
        }).then(res => res.json())
        .then(ingredient => {
            let newIngredient = new Ingredient(ingredient)
            newIngredient.renderIngredient(ingredientList)
        })
    }
    
    deleteIngredient(){
        const ingredientId = this.parentElement.dataset.id
        fetch(`${recipeUrl}/${ingredientId}`, {
            method: "DELETE"
        })
        this.parentElement.remove()
    }
    
    
}