import { TextInput, StyleSheet } from "react-native";

export default function (props) {
  return (
    <TextInput
      autoCapitalize="none" // automat ehnii usgiin tohirgoo ymuda Iphone deer medehdeh blltoi
      autoCorrect={false} // awtomat aar ym nemehgu bolgoh
      //
      //keyboardType="number-pad" //butarhai too c ugdug - numeric, number-pad - n zuwhun too

      {...props} //props oor orj irsn ymnuud zadraad garaad irne // login d damjuulj bga chn
      // placeholder1="Ta phone number oruulna uu, MyInput"
      // onChangeText1={
      //   //(text) => console.log(text)
      //   onChangePhoneNumber
      // }
      //ingeed zadraad orood irne gsn ug
      // placeholder={props.placeholder1}
      // onChangeText={props.onChangeText1}

      style={[css.inputField, props.style]}
    />
  );
}

const css = StyleSheet.create({
  inputField: {
    borderBottomColor: "purple",
    borderBottomWidth: 1,
    marginHorizontal: 20, //baruun zuun talaas
    // marginVertical: 10,
    padding: 10,
    //backgroundColor: "green",
  },
});
