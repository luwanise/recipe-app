import { RecipeInfo } from "@/models/RecipeInfo";
import { processRecipeIngredients } from "./processRecipeIngredients";


export function processRecipeInfo(response: any): RecipeInfo {
    const ingredients = processRecipeIngredients(response.extendedIngredients);

    const recipeInfo: RecipeInfo = {
        image: response.image,
        title: response.title,
        dishType: response.dishTypes?.[0] || 'Unknown',
        timeRequired: response.readyInMinutes,
        summary: response.summary,
        ingredients: ingredients,
        instructions: response.instructions
    }

    return recipeInfo;
}