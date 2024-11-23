import { Food } from "@/models/Food";

export function processRecipeList(response: any): Food[] {
    const recipes: Food[] = [];
    
    for (let recipe of response.data.recipes){
        const newRecipe: Food = {
            id: recipe.id,
            name: recipe.title,
            image: recipe.image,
            extraInfo: recipe.dishTypes?.[0] || "Unknown",
            shouldNavigate: true
        }
        recipes.push(newRecipe);
    }

    return recipes;
}