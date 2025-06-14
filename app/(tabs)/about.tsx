import { Text, SafeAreaView, View, StyleSheet } from "react-native";

export default function About() {
    return (
      <>
      
        <SafeAreaView style={styles.container}>

        </SafeAreaView>
      </>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    color: "white",
    textAlign: "center",
    fontSize: 40,
    fontWeight: 800,
    padding: 20,
  },
});