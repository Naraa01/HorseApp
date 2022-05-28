import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Alert,
  Platform,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { mainColor, lightColor, url } from "../../Constants";

import FormText from "../components/FormText";
import * as Animatable from "react-native-animatable";
import FormSwitch from "../components/FormSwitch";
import FormPicker from "../components/FormPicker";
import useGender from "../hooks/useGender";
import Spinner from "../components/Spinner";
import MyButton from "../components/MyButton";
import FormRadioButton from "../components/FormRadioButton";
import axios from "axios";
import UserContext from "../context/userContext";

import * as ImagePicker from "expo-image-picker";
import * as Linking from "expo-linking";
import { startActivityAsync, ActivityAction } from "expo-intent-launcher";

const HorseAddScreen = (props) => {
  const [genders, errorMsg, loading] = useGender();
  const [horse, setHorse] = useState({
    name: "Цагаан",
    father: "Бор халзан",
    mother: "Хонгор",
    // gender: "соёолон",
    color: "цагаан",
    pedigree: "abc",
    country: "cde",
    owner: "Naraa",
    photo: "no-horse.png",
    sire: "Naraa",
    info: "",
    status: "Одоо байгаа",
    genderId: null,
    //userId: "61a8eacf0168605e0a5c0354",
  });

  const [error, setError] = useState({
    name: false,
    father: false,
    mother: false,
    gender: false,
    color: false,
    pedigree: false,
    country: false,
    owner: false,
    photo: false,
    sire: false,
    info: false,
  });

  const [serverError, setServerError] = useState(null);
  const [saving, setSaving] = useState(false);

  const _token = useContext(UserContext);
  // console.log(_token.token, "token token");

  const saveHorse = () => {
    if (horse.genderId !== null) {
      setSaving(true);

      // const filename = horse.photo.substring(horse.photo.lastIndexOf("/") + 1);
      // const fileUri = horse.photo;
      // const fileExt = fileUri.substring(fileUri.lastIndexOf(".") + 1);
      // horse.photo = `photo_${new Date().getTime()}.${fileExt}`;
      // console.log(fileExt, "fileExt");

      // const filename = horse.photo.substring(horse.photo.lastIndexOf("/") + 1);
      // const fileExt = filename.substring(filename.lastIndexOf(".") + 1);
      // console.log(filename, "filename");
      // console.log(fileExt, "fileExt");

      // const fileUri = horse.photo;
      // horse.photo = filename;
      // // horse.photo = `photo_${new Date().getTime()}.${fileExt}`;

      axios
        .post(`${url}/horsesM`, horse)
        .then((res) => {
          // console.log(res, "res");
          const newHorse = res.data.data;
          // const xhr = new XMLHttpRequest();
          // const data = FormData();

          // data.append("file", {
          //   uri: fileUri,
          //   // uri: horse.photo,
          //   type: `image/${fileExt}`,
          //   name: horse.photo,
          //   // name: filename,
          //   // name: "photo.jpg",
          // });
          // xhr.open("PUT", `${url}/horsesM/${res.data.data._id}/upload-photo`);
          // xhr.send(data);

          // console.log(`${url}/horse/${res.data.data._id}/upload-photo bro`);

          props.navigation.navigate("Details", { horse: newHorse });
          console.log(res.data.data._id, "res.data.data._id");
          // console.log(res.data.data, "res.data.data");
        })
        .catch((e) => {
          if (e.response) {
            console.log(e.response.data.error.message);
            setServerError(e.response.data.error.message);
          } else setServerError(e.message);
        })
        .finally(() => {
          setSaving(false);
        });
    } else {
      Alert.alert("Хүйс сонгоно уу??");
    }
  };

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== "web") {
  //       const { status } = await ImagePicker.requestCameraPermissionsAsync();
  //       if (status !== "granted") {
  //         Alert.alert("Анхаар", "Утаснаас зураг оруулахыг зөвшөөрнө үү", [
  //           {
  //             text: "Тохиргоог нээх",
  //             onPress: () => {
  //               if (Platform.OS === "ios") {
  //                 Linking.openURL("app-settings:"); // ios
  //                 // } else {
  //                 //   // android intent
  //                 //   startActivityAsync(ActivityAction.APPLICATION_SETTINGS);
  //               }
  //             },
  //           },
  //           {
  //             text: "OK",
  //             onPress: () => {},
  //           },
  //         ]);
  //       }
  //     }
  //   })();
  // }, []);

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result, "ene y");

  //   if (!result.cancelled) {
  //     setHorse({ ...horse, photo: result.uri });
  //   }
  // };

  const checkName = (text) => {
    // let isValid = false;
    // if (text.length > 4) isValid = true;
    // setError({ ...error, name: !isValid });
    setError({ ...error, name: text.length < 4 || text.length > 100 });
    setHorse({ ...horse, name: text });
  };
  const checkFather = (text) => {
    setError({ ...error, father: text.length > 100 });
    setHorse({ ...horse, father: text });
  };
  const checkMother = (text) => {
    setError({ ...error, mother: text.length > 100 });
    setHorse({ ...horse, mother: text });
  };
  // const checkGender = (text) => {
  //   setError({ ...error, gender: text.length > 10 });
  //   setHorse({ ...horse, gender: text });
  // };
  const checkColor = (text) => {
    setError({ ...error, color: text.length > 20 });
    setHorse({ ...horse, color: text });
  };
  const checkPedigree = (text) => {
    setError({ ...error, pedigree: text.length > 100 });
    setHorse({ ...horse, pedigree: text });
  };
  const checkCountry = (text) => {
    setError({ ...error, country: text.length < 4 || text.length > 100 });
    setHorse({ ...horse, country: text });
  };
  const checkOwner = (text) => {
    setError({ ...error, owner: text.length < 4 });
    setHorse({ ...horse, owner: text });
  };
  const checkSire = (text) => {
    setError({ ...error, sire: text.length < 4 });
    setHorse({ ...horse, sire: text });
  };
  const checkInfo = (text) => {
    setError({ ...error, info: text.length < 20 });
    setHorse({ ...horse, info: text });
  };

  const toggleStatus = () => {
    setHorse({
      ...horse,
      status: !horse.status,
      // status: horse.status === "Одоо байгаа" ? "Одоо байхгүй" : "Одоо байгаа",
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: mainColor }}>
      <StatusBar backgroundColor={mainColor} barStyle="dark-content" />
      <View
        style={{
          flex: 1,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: mainColor,
        }}
      >
        <Text style={{ fontSize: 30, color: lightColor }}>Морь нэмэх</Text>
        <Text style={{ fontSize: 14, color: lightColor, marginTop: 10 }}>
          Та мэдээллээ оруулна уу
        </Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        duration={500}
        style={{
          flex: 5,
          paddingVertical: 30,
          paddingHorizontal: 20,
          backgroundColor: "#fff",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        {loading || saving ? (
          <Spinner />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {serverError &&
              Alert.alert("Анхаар", serverError, [
                {
                  text: "OK",
                  onPress: () => {
                    setServerError(null);
                  },
                },
              ])}
            <FormText
              label="Нэр оруулна уу"
              placeholder="Нэр"
              icon="book"
              errorText="Нэр алдаатай байна. 3-100"
              errorShow={error.name}
              value={horse.name}
              onChangeText={checkName}
            />

            {/* <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button title="Зураг сонгоно уу" onPress={pickImage} />
              {horse.photo && (
                <Image
                  source={{ uri: horse.photo }}
                  style={{ width: 100, height: 100 }}
                />
              )}
            </View> */}

            {/* <FormRadioButton
              label="Хүйс : "
              icon="layers"
              value={horse.gender}
              // data={genders.map((el) => el.name)}
              // values={genders.map((el) => el._id)}
              onValueChange={(value, index) => {
                console.log(value), setHorse({ ...horse, gender: value });
              }}

              // label="Radio Button : "
              // icon="layers"
              // value={horse.genderId}
              // data={genders.map((el) => el.name)}
              // values={genders.map((el) => el._id)}
              // onValueChange={(value, index) => {
              //   console.log(value), setHorse({ ...horse, genderId: value });
              // }}
            /> */}

            <FormPicker
              label="Хүйс : "
              icon="layers"
              value={horse.genderId}
              data={genders.map((el) => el.name)}
              values={genders.map((el) => el._id)}
              // data={[
              //   "Азарга",
              //   "Их нас",
              //   "Соёолон",
              //   "Хязаалан",
              //   "Шүдлэн",
              //   "Даага",
              // ]}
              // values={["azarga", "ih", "soyo", "hyza", "shud", "daa"]}
              onValueChange={(value, index) => {
                console.log(value), setHorse({ ...horse, genderId: value });
              }}
            />

            <FormText
              label="Эцэг оруулна уу"
              placeholder="Эцэг"
              icon="book"
              errorText="Нэр урт байна"
              errorShow={error.father}
              value={horse.father}
              onChangeText={checkFather}
            />
            <FormText
              label="Эх оруулна уу"
              placeholder="Эх"
              icon="edit"
              errorText="Нэр урт байна"
              keyboardType="numeric"
              value={horse.mother}
              errorShow={error.mother}
              onChangeText={checkMother}
            />
            {/* <FormText
              label="Хүйс оруулна уу"
              placeholder="Хүйс"
              icon="edit"
              errorText="Урт байна"
              value={horse.gender}
              errorShow={error.gender}
              onChangeText={checkGender}
            /> */}
            <FormText
              label="Зүс оруулна уу"
              placeholder="Зүс"
              icon="book"
              errorText="Зөв оруулна уу"
              value={horse.color}
              errorShow={error.color}
              onChangeText={checkColor}
            />
            <FormText
              label="Угшил оруулна уу"
              placeholder="Угшил"
              icon="book"
              errorText="Буруу утга байна"
              value={horse.pedigree}
              errorShow={error.pedigree}
              onChangeText={checkPedigree}
            />
            <FormText
              label="Нутаг оруулна уу"
              placeholder="Нутаг"
              errorText="Буруу утга байна"
              value={horse.country}
              errorShow={error.country}
              onChangeText={checkCountry}
            />
            <FormText
              label="Эзэн оруулна уу"
              placeholder="Эзэн"
              icon="edit"
              errorText="Буруу утга байна"
              value={horse.owner}
              errorShow={error.owner}
              onChangeText={checkOwner}
            />
            <FormText
              label="Уяач оруулна уу"
              placeholder="Уяач"
              icon="book"
              errorText="Буруу утга байна"
              value={horse.sire}
              errorShow={error.sire}
              onChangeText={checkSire}
            />
            {/* <FormText label="Зураг оруулна уу" placeholder="Зураг" /> */}
            <FormText
              label="Гаргасан амжилт"
              placeholder="Гаргасан амжилт"
              icon="book"
              errorText="Дор хаяж 20 үг байна"
              value={horse.info}
              errorShow={error.info}
              onChangeText={checkInfo}
              multiline
              numberOfLines={5}
            />
            <FormSwitch
              label="Одоо байгаа эсэх"
              icon="trending-up"
              data={["Одоо байгаа", "Одоо байхгүй"]}
              value={horse.status}
              onValueChange={toggleStatus}
            />

            {/* <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: 10,
              }}
            >
              <MyButton
                title1="Буцах"
                onPress1={() => props.navigation.goBack()}
              />
              <MyButton title1="Бүртгэх" onPress1={saveHorse} />
            </View> */}
            <View style={css.buttonView}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => props.navigation.goBack()}
                style={{
                  ...css.appButtonContainer,
                  backgroundColor: "#34568b",
                }}
              >
                <Text style={css.appButtonText}>Буцах</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={saveHorse}
                style={{
                  ...css.appButtonContainer,
                  backgroundColor: "#bc243c",
                }}
              >
                <Text style={css.appButtonText}>Бүртгэх</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </Animatable.View>
    </SafeAreaView>
  );
};

export default HorseAddScreen;

const css = StyleSheet.create({
  inputView: {
    marginHorizontal: 30,
  },
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
  buttonView: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
  },
  appButtonContainer: {
    // flex: 1,
    elevation: 10,
    width: 100,
    borderRadius: 20,
    marginHorizontal: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
