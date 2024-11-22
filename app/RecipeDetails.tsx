import { Colors } from "@/assets/Colors";
import useRecipeDetails from "@/hooks/useRecipeDetails";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import { StatusBar } from 'expo-status-bar';
import { router } from "expo-router";

export default function RecipeDetails() {
    
    const recipeInfo = useRecipeDetails()

    return (
        <View style={styles.container}>
            {/* <StatusBar style="light" translucent backgroundColor="transparent" /> */}
            <Image
                style={styles.recipeImage}
                source={{ uri: recipeInfo?.image }}
            />
            <TouchableOpacity style={styles.back} onPress={router.back}>
                <Ionicons name="chevron-back-circle" size={35} color={Colors.primary}/>
            </TouchableOpacity>
            <Text style={styles.recipeTitle}>{recipeInfo?.title}</Text>
            <Text style={styles.recipeCategory}>{recipeInfo?.dishType.toUpperCase()}</Text>
            <View style={styles.prepTimeContainer}>
                <Ionicons name="stopwatch-outline" size={20} color={Colors.text}/>
                <Text style={styles.recipePrepTime}>{recipeInfo?.timeRequired} minutes</Text>
            </View>
            <TouchableOpacity style={styles.viewIngredientsBtn}>
                <Text style={styles.viewIngredientsTxt}>View Ingredients</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewInstructionsBtn}>
                <Text style={styles.viewInstructionsTxt}>View Instructions</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    back: {
        position: 'absolute',
        top: 20,
        start: 10,
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
    viewIngredientsBtn: {
        width: "80%",
        marginTop: 20,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 20,
        padding: 15,
    },
    viewIngredientsTxt: {
        color: Colors.primary,
        fontSize: 15,
        fontWeight: "semibold",
        textAlign: "center"
    },
    viewInstructionsBtn: {
        width: "80%",
        marginTop: 20,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 20,
        padding: 15,
    },
    viewInstructionsTxt: {
        color: Colors.primary,
        fontSize: 15,
        fontWeight: "semibold",
        textAlign: "center"
    }
})