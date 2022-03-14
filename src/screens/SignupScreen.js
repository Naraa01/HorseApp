// core oos oruulj irj bga
import { useState, useContext } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// 3dagch comp
import { View, Text, Image, StyleSheet, Alert } from "react-native";

//Uuriin bichsen comp
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import UserContext from "../context/userContext";

export default function ({ navigation, route }) {
  //navigation delgets hoorond shiljih // props dotroosoo distract hiigeed awj bga
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);

  const state = useContext(UserContext);

  const signupHandler = () => {
    setError(null);

    if (name.length === 0) {
      Alert.alert("Нэр хоосон байна");
      return;
    }

    if (password1 !== password2) {
      Alert.alert("Нууц үг хоорондоо таарахгүй байна");
      return;
    }

    state.signUp(name, email, password1);
  };

  return (
    <View>
      <Image
        style={{ width: "100%", height: "32%" }}
        source={require("../../assets/img/horse0308.webp")}
      />

      <Text style={{ textAlign: "center", fontSize: 20, marginTop: 10 }}>
        Sign Up
      </Text>

      {error && (
        <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
      )}

      <MyInput
        value={name}
        placeholder="Та нэрээ оруулна уу?"
        onChangeText={setName}
      />
      <MyInput
        value={email}
        keyboardType="email-address"
        placeholder="Та и-мэйл хаягаа оруулна уу?"
        onChangeText={setEmail}
      />
      <MyInput
        value={password1}
        secureTextEntry={true}
        placeholder="Нууц үг"
        onChangeText={setPassword1} //onChangePhone n end bichigdssen uchir asuudalgv urgejline
      />
      <MyInput
        value={password2}
        secureTextEntry={true}
        placeholder="Нууц үг давтах"
        onChangeText={setPassword2}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 10,
        }}
      >
        <MyButton title1="Буцах!!!!!" onPress1={() => navigation.goBack()} />
        <MyButton title1="Бүртгүүлэх!!" onPress1={signupHandler} />
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  // inputField: {
  //   borderBottomColor: "green",
  //   borderBottomWidth: 1,
  //   marginHorizontal: 20, //baruun zuun talaas
  //   // marginVertical: 10,
  //   padding: 10,
  //   //backgroundColor: "green",
  // },
  // button: {
  //   marginVertical: 5,
  // },
});
