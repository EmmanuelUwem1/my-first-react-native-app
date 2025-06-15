import { Text, View, StyleSheet, SafeAreaView , ScrollView } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ width: "100%", alignItems: "center", paddingVertical: 20 }}
      >
        <Text style={styles.heading}>Welcome to my app</Text>
      </View>

      <ScrollView>
        <View style={styles.boxContainer}>
          {[...Array(18)].map((_, index) => (
            <Link href={"/(tabs)/about"} key={index}>
              <View style={styles.box}></View>
            </Link>
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
  heading: {
    flex: 1,
    color: "white",
    fontSize: 30,
    fontWeight:"bold",
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
