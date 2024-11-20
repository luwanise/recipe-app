import { Stack } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/assets/Colors";
import Ionicons from "@expo/vector-icons/Ionicons"

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name="index"
      options={{
        title: "HOME",
        headerTitleAlign: "center",
        headerTitleStyle: styles.headerTitle,
        statusBarBackgroundColor: "#000",
        headerStyle: styles.header,
        headerLeft: () => (
          <TouchableOpacity>
            <Ionicons name="menu" size={27} color={Colors.primary}/>
          </TouchableOpacity>
        )
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