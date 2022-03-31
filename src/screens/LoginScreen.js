// core oos oruulj irj bga
import { useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

// 3dagch comp
import { View, Text, Image, StyleSheet, Alert } from "react-native";

//Uuriin bichsen comp
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import UserContext from "../context/userContext";

export default function ({ navigation, route }) {
  //navigation delgets hoorond shiljih // props dotroosoo distract hiigeed awj bga

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const [token, setToken] = useState("");

  const state = useContext(UserContext);

  const loginHandler = () => {
    if (name.length === 0) {
      Alert.alert("Нэр хоосон байна");
      return;
    }

    if (password.length === 0) {
      Alert.alert("Нууц үг хоосон байна");
      return;
    }

    state.login(name, password);
    // axios
    //   .post(`http://192.168.0.124:5001/userM/login`, { name, password })
    //   .post(`http://192.168.1.94:5001/userM/login`, { name, password })
    //   .then((res) => {
    //     console.log(res.data);
    //     AsyncStorage.setItem("user_token", res.data.token)
    //       .then((res) => {
    //         console.log("Amjilttai newterch, token hadgalla");
    //         navigation.navigate("Home");
    //       })
    //       .catch((err) => {
    //         console.log("Login token hadgalsangu... : " + err.message);
    //         setError("Login token hadgalsangu...");
    //       }); // key value,, // promise uchir then catch ta
    //   })
    //   .catch((err) => {
    //     console.log(err.response.data.error.message); //response - serverees irsen obekt
    //     setError(err.response.data.error.message);
    //   });

    //
    //
    //Alert.alert(`Phone: ${phone}, Pass: ${password}`);
    //navigation.navigate("Login"); //Login huudasnaas login ruu shiljihgeed bga uchir ymar ch uurchlultgv uzuulne
    //navigation.push("Login"); //push hiigeed Login ruu ywbal Stack dotr login dahiad login duudagdna, butsah darahd butsaj login dere irseer suuldee home ruu ywna
    //
    // navigation.push("Home", {
    //   phone,
    //   password,
    //   garchig: "Tanii nuuts ug deer bn",
    // }); //parameter damjuulj bga
    // console.log(route.params);
  };

  // const phone1 = route.params ? route.params.phone : "no"; //parameter huleej awah
  // const password1 = route.params ? route.params.password : "no pass";
  // const name = route.params ? route.params.name : "no name";

  // console.log(route.params);

  // AsyncStorage.getItem("user_token")
  //   .then((res) => setToken(res))
  //   .catch((err) => console.log("err login token"));

  return (
    <View>
      <Image
        style={{ width: "100%", height: "32%" }}
        source={require("../../assets/img/horse0308.webp")} // zurgiin bairshil
      />

      <Text style={{ textAlign: "center", fontSize: 20, marginTop: 10 }}>
        Login
      </Text>

      {error && ( //error deer anhnii utga "" baihiin bol Text hooson bn gdg c ymu aldaa zaagaad bn,, null bolgojiij ajillana // uuruu bol const [error, setError] = useState(null); iim bn
        <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
      )}

      {/* <TextInput
        //value="hello text input"
        children="aaa" //children gj props bdg,, children n react iin tusgai comp
      /> */}

      <MyInput
        //keyboardType="email-address"
        placeholder="Та нэрээ оруулна уу?"
        onChangeText={setName} //uurchlugduh bolgond setName ruu oruulna
        value={name}
      />
      <MyInput
        secureTextEntry={true}
        style={css.inputField}
        placeholder="Нууц үгээ оруулна уу"
        onChangeText={setPassword} //onChangePhone n end bichigdssen uchir asuudalgv urgejline
        value={password}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 10,
        }}
      >
        <MyButton title1="Буцах" onPress1={() => navigation.goBack()} />
        <MyButton
          title1="Нэвтрэх"
          // damjih props uud
          onPress1={loginHandler} //zgr ingeed ajillahgu MyButton deeree props oor awjiij ajillana
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
  inputField: {
    borderBottomColor: "green",
    borderBottomWidth: 1,
    marginHorizontal: 20, //baruun zuun talaas
    // marginVertical: 10,
    padding: 10,
    //backgroundColor: "green",
  },
  // button: {
  //   marginVertical: 5,
  // },
});
