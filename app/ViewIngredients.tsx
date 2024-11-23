import { Colors } from "@/assets/Colors";
import BackButton from "@/components/BackButton";
import FoodList from "@/components/FoodList";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ViewIngredients() {
    const params = useLocalSearchParams();
    const data = JSON.parse(params.data.toString());
    console.log(data)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton name={"chevron-back"} size={27} />
                <Text style={styles.headerTitle}>Ingredients</Text>
            </View>
            <FoodList data={data} refreshing={false} onRefresh={() => {}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        backgroundColor: Colors.background,
        borderBottomWidth: 1,
        borderBottomColor: Colors.mixed, // Add a border if you like
    },
    backButton: {
        position: "absolute",
        left: 10
    },
    headerTitle: {
        color: Colors.text,
        fontSize: 20,
        fontWeight: "bold",
    },
})