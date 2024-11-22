import { RecipeInfo } from "@/models/RecipeInfo";
import { getRecipeInfo } from "@/utils/api/getRecipeInfo";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useEffect, useState } from "react";

export default function useRecipeDetails() {
    const { recipeId } = useLocalSearchParams();
    const [recipeInfo, setRecipeInfo] = useState<RecipeInfo>();

    useEffect(() => {
        const loadRecipeInfo = async () => 
            {
                const recipeInfo = await getRecipeInfo(recipeId.toString());
                setRecipeInfo(recipeInfo);
            }

            loadRecipeInfo();
    }, []);

    return recipeInfo
}