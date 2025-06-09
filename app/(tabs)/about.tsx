import { Text, View, StyleSheet } from "react-native";

export default function About() {
    return (
      <>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000000",
          }}
        ></View>
      </>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
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