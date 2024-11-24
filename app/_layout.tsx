import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { Colors } from "@/assets/Colors";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name="index"
      options={{
        title: "HOME",
        headerTitleAlign: "center",
        headerTitleStyle: styles.headerTitle,
        statusBarBackgroundColor: Colors.background,
        headerStyle: styles.header,
      }}/>

      <Stack.Screen
        name="RecipeDetails"
        options={{
          headerShown: false,
          statusBarBackgroundColor: Colors.background
        }} />

      <Stack.Screen
        name="ViewIngredients"
        options={{
          headerShown: false,
          statusBarBackgroundColor: Colors.background
        }}/>

      <Stack.Screen
        name="ViewInstructions"
        options={{
          headerShown: false,
          statusBarBackgroundColor: Colors.background
        }}/>
      
  </Stack>;
}

const styles = StyleSheet.create({
  headerTitle: {
    color: Colors.text,
  },
  header: {
    backgroundColor: Colors.background,
  },
})