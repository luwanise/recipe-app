import { Recipe } from "@/models/Recipe";

export function processRecipeList(response: any): Recipe[] {
    const recipes: Recipe[] = [];
    
    for (let recipe of response.data.recipes){
        const newRecipe: Recipe = {
            id: recipe.id,
            title: recipe.title,
            imageUrl: recipe.image,
            dishType: recipe.dishTypes?.[0] || "Unknown"
        }
        recipes.push(newRecipe);
    }

    return recipes;
}