import { View, Button, StyleSheet } from "react-native";

export default function ({ title1, onPress1, style }) {
  //{ title1, onPress1, style } shuud ingej awj bolno props oor,, ingesneer props geh shaardlagagu bolno, olon props bwal props geed awsan n zgr
  return (
    <View
      style={[css.button, style]}
      //style dotorh daraalal bs hamaarna //props.style suuld bsnaar daraa n ajillana
    >
      <Button title={title1} onPress={onPress1} />
    </View>
  );
}

const css = StyleSheet.create({
  button: {
    marginVertical: 5,
    marginHorizontal: 20,
  },
});
