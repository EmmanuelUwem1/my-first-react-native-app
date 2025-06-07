import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />

      <View style={styles.container}>
        <Text style={styles.text}>Home screen</Text>
        <Link href="/about" style={styles.button}>
          Go to About screen
        </Link>
      </View>
    </>
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
});
