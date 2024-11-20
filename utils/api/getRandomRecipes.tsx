import axios from 'axios';
import { processResponse } from '../helper/processResponse';
import { Recipe } from '@/models/Recipe';

const apiKey = process.env.EXPO_PUBLIC_API_KEY;
const baseUrl = 'https://api.spoonacular.com';

export const getRandomRecipes = async(count: number = 10): Promise<Recipe[]> => {
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

        return processResponse(response)
    } catch (error) {
        console.error('Error fetching random recipes:', error);
        throw error;
    }
}