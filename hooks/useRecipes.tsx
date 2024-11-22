import { Recipe } from "@/models/Recipe";
import { getRandomRecipes } from "@/utils/api/getRandomRecipes";
import { useEffect, useState } from "react";

export const useRecipes = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    const loadRecipes = async() => {
        setRefreshing(true);
        const recipes = await getRandomRecipes();
        setRecipes(recipes);
        setRefreshing(false)
    }

    useEffect(() => { loadRecipes() }, []);

    return { recipes, refreshing, loadRecipes };
};