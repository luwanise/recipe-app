import { StyleSheet, View } from "react-native";
import FoodList from "@/components/FoodList";
import { useRecipes } from "@/hooks/useRecipes";

export default function Index() {

  const { recipes, refreshing, loadRecipes } = useRecipes();

  return (
    <View style={styles.container}>
      <FoodList data={recipes} refreshing={refreshing} onRefresh={loadRecipes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
