import { Ingredient } from "@/models/Ingredient";

export function processRecipeIngredients(ingredientsList: any): Ingredient[] {
    return ingredientsList.map((ingredient: any) => ({
        name: ingredient.nameClean,
        image: `https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`,
        amount: ingredient.amount,
        unit: ingredient.unit,
    }));
}