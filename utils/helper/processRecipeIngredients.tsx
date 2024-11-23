import { Food } from "@/models/Food";

export function processRecipeIngredients(ingredientsList: any): Food[] {
    return ingredientsList.map((ingredient: any) => ({
        id: ingredient.id,
        name: ingredient.nameClean,
        image: `https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`,
        extraInfo: `${ingredient.amount} ${ingredient.unit}`.trim(),
        shouldNavigate: false
    }));
}