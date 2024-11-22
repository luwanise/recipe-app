import { StyleSheet, View } from "react-native";
import RecipeList from "@/components/RecipeList";
import { useRecipes } from "@/hooks/useRecipes";

export default function Index() {

  const { recipes, refreshing, loadRecipes } = useRecipes();

  return (
    <View style={styles.container}>
      <RecipeList recipes={recipes} refreshing={refreshing} onRefresh={loadRecipes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
