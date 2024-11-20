import { FlatList, RefreshControl, StyleSheet } from "react-native";
import { Recipe } from "@/models/Recipe";
import RecipeItem from "./RecipeItem";
import { Colors } from "@/assets/Colors";

interface RecipeListProps {
    recipes: Recipe[];
    refreshing: boolean;
    onRefresh: () => void;
}
export default function RecipeList({recipes, refreshing, onRefresh}: RecipeListProps){
    return (
        <FlatList
            style={styles.container}
            data={recipes}
            renderItem={({item}) => <RecipeItem item={item}/>}
            keyExtractor={(recipe) => recipe.id.toString()}
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