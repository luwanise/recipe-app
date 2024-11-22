import axios from 'axios';
import { RecipeInfo } from '@/models/RecipeInfo';
import { processRecipeInfo } from '../helper/processRecipeInfo';

const apiKey = process.env.EXPO_PUBLIC_API_KEY;
const baseUrl = 'https://api.spoonacular.com';

export const getRecipeInfo = async(recipeId: string): Promise<RecipeInfo> => {
    try {
        const response = await axios.get(
            `${baseUrl}/recipes/${recipeId}/information`, {
                params: {
                    apiKey: apiKey,
                },
            }
        );

        return processRecipeInfo(response.data);
    } catch (error) {
        console.error('Error fetching recipe information:', error);
        throw error;
    }
}