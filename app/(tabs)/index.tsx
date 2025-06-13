import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxContainer}>
        {[...Array(8)].map((_, index) => (
          <View key={index} style={styles.box}></View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "white",
  },
  boxContainer: {
    flex:1,
    flexDirection: "row",
    flexWrap: "wrap", // Ensures boxes stay within the screen
    gap: 16, // Works in React Native 0.71+
    justifyContent: "flex-start",
  },
  box: {
    backgroundColor: "black",
    width: 200, // Explicit width for square shape
    height: 200, // Explicit height for square shape
    borderRadius: 10,
  },
});
