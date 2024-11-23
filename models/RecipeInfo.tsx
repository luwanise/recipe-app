import { Food } from "./Food";

export type RecipeInfo = {
    image: string;
    title: string;
    dishType: string;
    timeRequired: number;
    summary: string;
    ingredients: Food[];
    instructions: string;
}