import { FlatList, RefreshControl, StyleSheet } from "react-native";
import { Food } from "@/models/Food";
import FoodItem from "./FoodItem";
import { Colors } from "@/assets/Colors";

interface RecipeListProps {
    data: Food[];
    refreshing: boolean;
    onRefresh: () => void;
}
export default function FoodList({data: data, refreshing, onRefresh}: RecipeListProps){
    return (
        <FlatList
            style={styles.container}
            data={data}
            renderItem={({item}) => <FoodItem item={item}/>}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.colWrapper}
            contentContainerStyle={styles.contentContainer}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressBackgroundColor={Colors.card}
                    colors={[Colors.primary]} // Android indicator color
                    tintColor={Colors.primary} // IOS indicator color
                />
            }
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    colWrapper: {
        gap: 15,
        paddingHorizontal: 15,
    },
    contentContainer: {
        gap: 15,
        paddingVertical: 15,
    },
})