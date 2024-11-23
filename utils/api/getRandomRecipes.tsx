import axios from 'axios';
import { processRecipeList } from '../helper/processRecipeList';
import { Food } from '@/models/Food';
import { apiKey, baseUrl } from '@/constants/apiDetails';

export const getRandomRecipes = async(count: number = 10): Promise<Food[]> => {
    try {
        const response = await axios.get(
            `${baseUrl}/recipes/random?`, {
                params: {
                    apiKey: apiKey,
                    limitLicense: true,
                    number: count
                },
            }
        );

        return processRecipeList(response)
    } catch (error) {
        console.error('Error fetching random recipes:', error);
        throw error;
    }
}