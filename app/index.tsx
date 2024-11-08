import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Hello! Expo</Text>
      <Text style={style.text}>This is My First React App.</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  }
});
