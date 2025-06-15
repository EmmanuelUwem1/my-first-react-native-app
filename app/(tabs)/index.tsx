import { Text, View, StyleSheet, SafeAreaView, ScrollViewComponent , ScrollView, TouchableHighlight } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.boxContainer}>
          {[...Array(18)].map((_, index) => (
            <View key={index} style={styles.box}></View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: "100%",
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
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap", 
    gap: 16, 
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 120,
    paddingBottom: 60,
  },
  box: {
    backgroundColor: "#5f5f61",
    width: 160, 
    height: 160, 
    borderRadius: 10,
  },
});
