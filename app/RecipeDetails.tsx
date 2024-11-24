import { Colors } from "@/assets/Colors";
import useRecipeDetails from "@/hooks/useRecipeDetails";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import RecipeButton from "@/components/RecipeButton";
import BackButton from "@/components/BackButton";

export default function RecipeDetails() {
    
    const {recipeInfo, loading } = useRecipeDetails();

    return (
        <View style={styles.container}>
            { loading ? (
            <View style={styles.loading}>
                <Text style={styles.recipeTitle}> Loading Recipe Details... </Text>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        ): (
            <View style={styles.content}>
                <Image style={styles.recipeImage} source={{ uri: recipeInfo?.image }} />
                <BackButton name={"chevron-back-circle"} size={35} />
                
                <Text style={styles.recipeTitle}> {recipeInfo?.title} </Text>
                <Text style={styles.recipeCategory}> {recipeInfo?.dishType.toUpperCase()} </Text>
                
                <View style={styles.prepTimeContainer}>
                    <Ionicons name="stopwatch-outline" size={20} color={Colors.text}/>
                    <Text style={styles.recipePrepTime}>{recipeInfo?.timeRequired} minutes</Text>
                </View>
                
                <RecipeButton text="View Ingredients" route="/ViewIngredients" data={recipeInfo?.ingredients}/>
                <RecipeButton text="View Instructions" route="/ViewInstructions" data={recipeInfo?.instructions}/>
            </View>
        )}
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    content: {
        flex: 1,
        alignItems: 'center',
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