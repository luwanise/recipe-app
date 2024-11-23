import { Colors } from "@/assets/Colors";
import useRecipeDetails from "@/hooks/useRecipeDetails";
import { Image, StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import RecipeButton from "@/components/RecipeButton";
import BackButton from "@/components/BackButton";

export default function RecipeDetails() {
    
    const recipeInfo = useRecipeDetails()

    return (
        <View style={styles.container}>
            <Image style={styles.recipeImage} source={{ uri: recipeInfo?.image }} />
            <BackButton name={"chevron-back-circle"} size={35} />
            
            <Text style={styles.recipeTitle}> {recipeInfo?.title} </Text>
            <Text style={styles.recipeCategory}> {recipeInfo?.dishType.toUpperCase()} </Text>
            
            <View style={styles.prepTimeContainer}>
                <Ionicons name="stopwatch-outline" size={20} color={Colors.text}/>
                <Text style={styles.recipePrepTime}>{recipeInfo?.timeRequired} minutes</Text>
            </View>
            
            <RecipeButton text="View Ingredients" route="/ViewIngredients" data={recipeInfo?.ingredients}/>
            <RecipeButton text="View Instructions" route="/" data={recipeInfo?.instructions}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    recipeImage: {
        width: "100%",
        aspectRatio: 1,
        opacity: 0.8
    },
    recipeTitle: {
        margin: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: Colors.text,
        fontSize: 22,
    },
    recipeCategory: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15,
        color: Colors.primary
    },
    prepTimeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        gap: 5,
    },
    recipePrepTime: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 15,
        color: Colors.text
    },
})