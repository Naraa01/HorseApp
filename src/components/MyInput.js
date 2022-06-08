import { TextInput, StyleSheet } from "react-native";

export default function (props) {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      {...props}
      // placeholder1="Ta phone number oruulna uu, MyInput"
      // onChangeText1={
      //   //(text) => console.log(text)
      //   onChangePhoneNumber
      // }
      style={[css.inputField, props.style]}
    />
  );
}

const css = StyleSheet.create({
  inputField: {
    borderBottomColor: "purple",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    padding: 10,
  },
});
