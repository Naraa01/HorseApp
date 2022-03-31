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
    gender: "соёолон",
    color: "цагаан",
    pedigree: "abc",
    country: "cde",
    owner: "Naraa",
    photo: null,
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
      axios
        .post(`${url}/horsesM`, horse)
        .then((res) => {
          console.log(res);
          const newHorse = res.data.data;
          const xhr = new XMLHttpRequest();
          const data = FormData();
          data.append("file", {
            uri: horse.photo,
            type: "image/jpg",
            name: "photo.jpg",
          });
          xhr.open("PUT", `${url}/horsesM/${res.data.data_id}/upload-photo`);
          xhr.send(data);

          props.navigation.navigate("Details", { horse: newHorse });
          console.log(res.data.data_id, "res.data.data");
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

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Анхаар", "Утаснаас зураг оруулахыг зөвшөөрнө үү", [
            {
              text: "Тохиргоог нээх",
              onPress: () => {
                if (Platform.OS === "ios") {
                  Linking.openURL("app-settings:"); // ios
                  // } else {
                  //   // android intent
                  //   startActivityAsync(ActivityAction.APPLICATION_SETTINGS);
                }
              },
            },
            {
              text: "OK",
              onPress: () => {},
            },
          ]);
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setHorse({ ...horse, photo: result.uri });
    }
  };

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
  const checkGender = (text) => {
    setError({ ...error, gender: text.length > 10 });
    setHorse({ ...horse, gender: text });
  };
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
      // status: !horse.status
      status: horse.status === "Одоо байгаа" ? "Одоо байхгүй" : "Одоо байгаа",
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
              errorText="Нэр алдаатай байна. 4-100"
              errorShow={error.name}
              value={horse.name}
              onChangeText={checkName}
            />

            <View
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
            </View>

            <FormRadioButton
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
            />

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
            <FormText
              label="Хүйс оруулна уу"
              placeholder="Хүйс"
              icon="edit"
              errorText="Урт байна"
              value={horse.gender}
              errorShow={error.gender}
              onChangeText={checkGender}
            />
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

            <View
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
            </View>
          </ScrollView>
        )}
      </Animatable.View>
    </SafeAreaView>
  );
};

export default HorseAddScreen;

const styles = StyleSheet.create({});
