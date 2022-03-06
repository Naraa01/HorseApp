// core oos oruulj irj bga
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// 3dagch comp
import { View, Text, Image, StyleSheet, Alert } from "react-native";

//Uuriin bichsen comp
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";

export default function ({ navigation, route }) {
  //navigation delgets hoorond shiljih // props dotroosoo distract hiigeed awj bga
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);

  const signupHandler = () => {
    setError(null);

    if (name.length === 0) {
      Alert.alert("Ner hooson baina");
      return;
    }

    // *** 1 *** same adilhan
    if (password1 !== password2) {
      Alert.alert("Pass hoorond taarahgu bn");
      return;
    }

    // if (password1 === password2) {
    //   Alert.alert("Amjilttai");
    // } else {
    //   Alert.alert("Pass hoorond taarahgu bn");
    // }
    // *** 1 ***

    //Alert.alert(`Phone: ${phone}, Pass: ${password}`);
    //navigation.navigate("Login"); //Login huudasnaas login ruu shiljihgeed bga uchir ymar ch uurchlultgv uzuulne
    //navigation.push("Login"); //push hiigeed Login ruu ywbal Stack dotr login dahiad login duudagdna, butsah darahd butsaj login dere irseer suuldee home ruu ywna
    //
    // navigation.push("Login", {
    //   phone,
    //   password,
    //   garchig: "Tanii nuuts ug deer bn",
    // }); //parameter damjuulj bga
    // console.log(route.params);

    axios
      .post(`http://192.168.1.94:8000/api/v1/users/register`, {
        name: name,
        email: email,
        password: password1,
        role: "operator",
      })
      .then((res) => {
        console.log(res.data);
        AsyncStorage.setItem("user_token", res.data.token)
          .then((res) => {
            navigation.navigate("Home");
            console.log("token hadgalla");
          })
          .catch((err) => {
            console.log("token hadgalsangu... : " + err.message);
            setError("token hadgalsangu...");
          }); // key value,, // promise uchir then catch ta
      })
      .catch((err) => {
        console.log(err.response.data.error.message); //response - serverees irsen obekt
        setError(err.response.data.error.message);
      });
  };

  // const phone1 = route.params ? route.params.phone : "no"; //parameter huleej awah
  // const password1 = route.params ? route.params.password : "no pass";
  // const name = route.params ? route.params.name : "no name";

  // console.log(route.params);

  return (
    <View>
      {/* <Text>
        {name}-{email}-{password1}-{password2}
      </Text> */}
      <Image
        style={{ width: "100%", height: "30%" }}
        source={require("../../assets/img/shop.png")} // zurgiin bairshil
      />

      <Text style={{ textAlign: "center", fontSize: 20, marginTop: 10 }}>
        Sign Up
      </Text>

      {error && (
        <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
      )}

      {/* <TextInput
        //value="hello text input"
        children="aaa" //children gj props bdg,, children n react iin tusgai comp
      /> */}

      <MyInput
        value={name}
        placeholder="Ta name oruulna uu?"
        onChangeText={setName}
      />
      <MyInput
        value={email}
        keyboardType="email-address"
        placeholder="Ta email hayga oruulna uu?"
        onChangeText={setEmail}
      />
      <MyInput
        value={password1}
        secureTextEntry={true}
        placeholder="Password oruulna uu"
        onChangeText={setPassword1} //onChangePhone n end bichigdssen uchir asuudalgv urgejline
      />
      <MyInput
        value={password2}
        secureTextEntry={true}
        placeholder="Password again"
        onChangeText={setPassword2}
      />

      {/* <View style={css.button}><Button title="Newtreh" // onPress={}/></View> */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 10,
        }}
      >
        <MyButton title1="Буцах!!!!!" onPress1={() => navigation.goBack()} />
        <MyButton
          title1="Бүртгүүлэх!!"
          // damjih props uud
          onPress1={signupHandler} //zgr ingeed ajillahgu MyButton deeree props oor awjiij ajillana
          //button deer darahad yahiig ene login delgets buyu etseg n helj ugnu, MyButton helehgu

          // odoogoor style= {{}} hiiwel huleej awahgu // props oor style MyButton awsan
          //style={{ marginHorizontal: 20 }}
        />

        {/* <MyButton title1="List" onPress1={() => navigation.navigate("List")} /> */}

        {/* <MyButton>// baij bolno</MyButton> */}
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
