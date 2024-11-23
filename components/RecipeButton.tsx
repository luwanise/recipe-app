import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "@/assets/Colors";
import { router } from "expo-router";

interface RecipeButtonProps {
    route: any;
    text: string;
    data: any;
}
export default function RecipeButton({route, text, data}: RecipeButtonProps){
    return (
        <TouchableOpacity 
            style={styles.recipeBtn} 
            onPress={() => router.push({
                pathname: route,
                params: { data: JSON.stringify(data) }
            })}
        >
            <Text style={styles.recipeBtnText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    recipeBtn: {
        width: "80%",
        marginTop: 20,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 20,
        padding: 15,
    },
    recipeBtnText: {
        color: Colors.primary,
        fontSize: 15,
        fontWeight: "semibold",
        textAlign: "center"
    },
})