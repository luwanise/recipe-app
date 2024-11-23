import { Food } from "@/models/Food";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "@/assets/Colors"
import { router } from "expo-router";

interface RecipeItemProps {
    item: Food;
}
export default function FoodItem({item}: RecipeItemProps) {
    return (
        
        <TouchableOpacity 
            style={styles.recipeItem} 
            onPress={() => {
                if (item.shouldNavigate){
                    router.push({
                        pathname: "/RecipeDetails",
                        params: { recipeId: item.id }
                    })
                }
            }}
        >
            <Image 
                style={styles.recipeImage}
                source={{ uri: item.image }}
            />
            <View style={styles.textContainer}>
                <Text style={styles.recipeTitle}>{item.name}</Text>
                <Text style={styles.recipeCategory}>{item.extraInfo.toUpperCase()}</Text>
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