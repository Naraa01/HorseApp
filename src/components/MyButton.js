import { View, Button, StyleSheet } from "react-native";

export default function ({ title1, onPress1, style }) {
  return (
    <View style={[css.button, style]}>
      <Button title={title1} onPress={onPress1} />
    </View>
  );
}

const css = StyleSheet.create({
  button: {
    marginVertical: 5,
    marginHorizontal: 20,
    width: 150,
    backgroundColor: "yellow",
  },
});
