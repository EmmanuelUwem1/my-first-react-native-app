import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Details for item: {id}</Text>
    </View>
  );
}
