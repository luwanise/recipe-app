export function processRecipeIngredients(ingredientsList: any) {
    return ingredientsList.map((ingredient: any) => ingredient.original);
}
