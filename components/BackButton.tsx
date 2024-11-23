import { StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/assets/Colors";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

interface BackButtonProps {
    name: any;
    size: number;
}
export default function BackButton({name, size}: BackButtonProps){
    return (
        <TouchableOpacity style={styles.back} onPress={router.back}>
            <Ionicons name={name} size={size} color={Colors.primary}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    back: {
        position: 'absolute',
        start: 10,
        top: 17
    },
})