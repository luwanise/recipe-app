import { Recipe } from "@/models/Recipe";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "@/assets/Colors";

interface RecipeItemProps {
    item: Recipe;
}
export default function RecipeItem({item}: RecipeItemProps) {
    return (
        <TouchableOpacity style={styles.recipeItem}>
            <Image 
                style={styles.recipeImage}
                source={{ uri: item.imageUrl }}
            />
            <View style={styles.textContainer}>
                <Text style={styles.recipeTitle}>{item.title}</Text>
                <Text style={styles.recipeCategory}>{item.dishType.toUpperCase()}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    recipeItem: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: Colors.card,
        borderRadius: 20,
        elevation: 2,
    },
    recipeImage: {
        width: "100%",
        aspectRatio: 1,
        borderRadius: 20,
    },
    textContainer: {
        flex: 1,
        justifyContent: "space-between",
    },
    recipeTitle: {
        margin: 10,
        textAlign: "center",
        fontWeight: "700",
        color: Colors.text,
        fontSize: 14,
    },
    recipeCategory: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 12,
        color: Colors.text,
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: Colors.mixed
    }
})