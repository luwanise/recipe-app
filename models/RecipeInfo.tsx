import { Ingredient } from "./Ingredient";

export type RecipeInfo = {
    image: string;
    title: string;
    dishType: string;
    timeRequired: number;
    summary: string;
    ingredients: Ingredient[];
    instructions: string;
}