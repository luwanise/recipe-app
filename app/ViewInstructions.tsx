import { Colors } from "@/assets/Colors";
import BackButton from "@/components/BackButton";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ViewInstructions() {
    const params = useLocalSearchParams();
    const data = JSON.parse(params.data.toString());
    // Remove HTML tags
    const plainText = data.replace(/<\/?[^>]+(>|$)/g, '');
    // Split the text into sentences
    const sentences = plainText.split(/(?<=\.)\s+/);
    


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton name={"chevron-back"} size={27} />
                <Text style={styles.headerTitle}>How it's Made!</Text>
            </View>
            <ScrollView>
                {sentences.map((sentence: string, index: number) => (
                        <Text key={index} style={styles.body}>
                            {sentence.trim()}
                        </Text>
                    ))}
            </ScrollView>
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
        borderBottomColor: Colors.mixed,
    },
    headerTitle: {
        color: Colors.text,
        fontSize: 20,
        fontWeight: "bold",
    },
    body: {
        color: Colors.text,
        fontSize: 20,
        padding: 10,
    }
})