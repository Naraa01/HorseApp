import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
  LinearGradient,
  TouchableRipple,
  SafeAreaView,
  Label,
  TextInput,
} from "react-native";
import React, { useEffect, useState, useLayoutEffect, useContext } from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { url } from "../../Constants";
import Comments from "../components/Comments";
// import axios from "axios";
// import { Button } from "@rneui/themed";

import useHorse from "../hooks/useHorse";
import UserContext from "../context/userContext";
import MyButton from "../components/MyButton";
import FlashMessage from "react-native-flash-message";
import { RadioButton } from "react-native-paper";
import axios from "axios";
import Tree from "../components/Tree";
import { useNavigation } from "@react-navigation/native";
// import { useFonts } from "expo-font";

const HorseDetailScreen = (props) => {
  const [message, setMessage] = useState(false);
  const [ref, setRef] = useState(false);
  const [rating, setRating] = React.useState(null);
  const [treeData, setTreeData] = useState(null);
  const [updateRatingData, setUpdateRatingData] = React.useState(null);
  const navigation = useNavigation();

  const state = useContext(UserContext);
  const horseId = props.route.params.horse;
  const checkRating = updateRatingData?.rating
    ? updateRatingData.rating
    : horseId?.rating;
  // console.log('" horseId ----"', horseId);

  const loadHorse = async () => {
    try {
      const result = await axios.get(
        `${url}/horsesM/${horseId._id}`
        // `http://192.168.1.94:5001//horsesM/${horseId}`
      );
      // const result = await axios.get(`${url}/horsesM/${horseId}`);
      setTreeData(result.data.data);
      setRef(false);
      // setError(null);
    } catch (err) {
      // setError(err.message);
      console.log("load Horse error ", err.message);
    }
  };

  useEffect(() => {
    loadHorse();
  }, [horseId._id]);

  // const [loaded] = useFonts({
  //   JosefinSansItalic: require("../../assets/fonts/JosefinSans-Italic.ttf"),
  // });

  // if (!loaded) {
  //   return null;
  // }

  // // console.log("--props navig --", props.navigation);
  // // console.log("--avig --", props.route.params);

  // //const horse = props.route.params.horse;

  const { id } = props.route.params.horse; //

  const [horse, error, deleteHorse] = useHorse(props.route.params.horse._id);
  console.log("hortse ----- >> ", horse, "<<---");

  const RatingSave = (value) => {
    let body = { value };
    // console.log("value value vlaue", value);
    axios
      .put(`${url}/horsesM/update/${props.route.params.horse._id}`, body)
      .then((res) => {
        // console.log("res.data.data", res.data.data);
        setUpdateRatingData(res.data.data);
      })
      .catch((e) => {
        console.log("eeeeee", e);
        if (e.response) {
          // console.log(e.response.data.error.message);
          // setServerError(e.response.data.error.message);
        }
        // else setServerError(e.message);
      });
    // .finally(() => {
    //   setSaving(false);
    // });
    // } else {
    //   Alert.alert("Хүйс сонгоно уу??");
    // }
  };

  // useLayoutEffect(() => {
  //   // props.navigation.setOptions({
  //   //   headerRight: () => (
  //   //     <Feather
  //   //       name="menu"
  //   //       size={24}
  //   //       style={{ marginRight: 15 }}
  //   //       color="red"
  //   //       onPress={() => {
  //   //         console.log("Hewlele");
  //   //       }}
  //   //     />
  //   //   ),
  //   //   //
  //   // });
  // }, [props.navigation]);

  // if (error) {
  //   return <Text style={{ color: "red" }}>Aldaa garlaa Meedku hna iin</Text>;
  // }

  // if (!horse) {
  //   //horse n null baihiin bol
  //   return null;
  // }

  const deleteOneHorse = () => {
    Alert.alert("Анхаар", "Устгахдаа итгэлтэй байна уу??", [
      { text: "Татгалзах", onPress: () => {} },
      {
        text: "Устгах",
        onPress: () => {
          deleteHorse(horseId._id)
            .then((res) => {
              console.log("Ustgalaa ", res.data.data);
              props.navigation.navigate("Home", {
                deletedHorse: res.data.data,
              });
            })
            .catch((err) => Alert.alert("Устгаж чадсангүй : " + err.message));
        },
      },
    ]);
  };

  // if (!horseId) {
  //   return null;
  // }

  return (
    <ScrollView //style={{ padding: 25 }}
      showsVerticalScrollIndicator={false}
    >
      {/* {horseId.photo.startsWith("/") ? (
        <Image
          style={{
            width: "100%",
            height: 250,
            //alignSelf: "center"
          }}
          source={{
            // uri: `http://192.168.1.94:5001/profile/` + horseId.photo,
            uri: `${url}/profile/` + horseId.photo,
          }}
        />
      ) : (
        <Image
          style={{
            width: "100%",
            height: 250,
            //alignSelf: "center"
          }}
          source={{
            // uri: `http://192.168.1.94:5001/profile/` + horseId.photo,
            uri: url + "/upload/" + horseId.photo,
          }}
        />
      )} */}
      {/* <FlashMessage position="top" /> */}
      <View style={{ margin: 30 }}>
        <Text style={{ flex: 1, fontSize: 16, color: "gray" }}>Нэр</Text>
        <Text style={{ flex: 1, fontSize: 25, fontWeight: "bold" }}>
          {horseId.name}
        </Text>
      </View>
      {/* <Text>{horseId.photo}</Text> */}
      <View style={{ marginHorizontal: 5, borderRadius: 20 }}>
        <Image
          style={{
            width: "100%",
            height: 250,
            //alignSelf: "center"
            borderRadius: 20,
          }}
          source={{
            // uri: `http://192.168.1.94:5001/profile/` + horseId.photo,
            uri: `${url}/profile/` + horseId.photo,
          }}
        />
      </View>
      <View style={{ paddingHorizontal: 0, paddingVertical: 10 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: 10,
            justifyContent: "space-between",
            // backgroundColor: "blue",
          }}
        >
          <View
            style={{
              // marginHorizontal: 10,
              paddingHorizontal: 10,
              // borderBottomRightRadius: 30,
              // borderRadius: 8,
              // backgroundColor: "#e5e5e5",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                marginHorizontal: 5,
                color: "gray",
                // fontFamily: "JosefinSans-Italic",
                fontFamily: "sans-serif-medium",
              }}
            >
              Эцэг
            </Text>
            <TouchableOpacity
              onPress={() => {
                // window.location.reload(true);
                navigation.navigate("Details", { horse: treeData?.fatherId });

                // navigation.navigate("Details", { horse: treeData });
                // setRef(true);
              }}
              // style={{
              //   paddingVertical: 14,
              //   flexDirection: "row",
              //   alignItems: "center",
              // }}
            >
              <Text style={{ fontSize: 20 }}> {treeData?.fatherId?.name}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Text
              style={{
                fontSize: 14,
                color: "gray",
                fontFamily: "sans-serif-medium",
              }}
            >
              Эх
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Details", { horse: treeData?.motherId });
              }}
            >
              <Text style={{ fontSize: 20 }}>{treeData?.motherId?.name}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Text
              style={{
                fontSize: 14,
                color: "gray",
                fontFamily: "sans-serif-medium",
              }}
            >
              Зүс
            </Text>
            <Text style={{ fontSize: 20 }}>{horseId.color}</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 8,
            flexDirection: "row",
            // backgroundColor: "blue",
            // flex: 1,
            // paddingHorizontal: 10,
            // justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flex: 1,
              paddingLeft: 20,
              // backgroundColor: "blue",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                marginHorizontal: 5,
                color: "gray",
                fontFamily: "sans-serif-medium",
              }}
            >
              Угшил
            </Text>
            <Text style={{ fontSize: 20 }}> {horseId.pedigree}</Text>
          </View>
          <View
            style={{
              flex: 1,
              // marginHorizontal: 120,
              // backgroundColor: "yellow",
              fontFamily: "sans-serif-medium",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                marginHorizontal: 5,
                color: "gray",
                fontFamily: "sans-serif-medium",
              }}
            >
              Эзэн
            </Text>
            <Text style={{ fontSize: 20 }}> {horseId.owner}</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 8,
            // flex: 1,
            flexDirection: "row",
            // backgroundColor: "blue",
            // paddingHorizontal: 10,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1, paddingLeft: 20 }}>
            <Text
              style={{
                fontSize: 14,
                // fontFamily: "courier",
                marginHorizontal: 5,
                color: "gray",
                fontFamily: "sans-serif-medium",
              }}
            >
              Нутаг
            </Text>
            <Text style={{ fontSize: 20 }}> {horseId.country}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 14,
                marginHorizontal: 5,
                color: "gray",
                fontFamily: "sans-serif-medium",
              }}
            >
              Уяач
            </Text>
            <Text style={{ fontSize: 20 }}> {horseId.sire}</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 8,
            flexDirection: "row",
            // flex: 1,
            // backgroundColor: "blue",
            // paddingHorizontal: 10,
            // justifyContent: "space-between",
          }}
        >
          {/* {horseId.rating && (
            <View>
              <Text
                style={{ fontSize: 14, marginHorizontal: 5, color: "gray" }}
              >
                Үнэлгээ
              </Text>
              <Text style={{ fontSize: 20 }}>{horseId.rating}</Text>
            </View>
          )} */}
          <View style={{ flex: 1, paddingLeft: 20 }}>
            <Text
              style={{
                fontSize: 14,
                marginHorizontal: 5,
                color: "gray",
                fontFamily: "sans-serif-medium",
              }}
            >
              Үнэлгээ
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {[...Array(5)].map((star, i, number) => {
                const ratingValue = i + 1;
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setRating(ratingValue);
                      RatingSave(ratingValue);
                    }}
                    // onPress={() => (
                    //   setRating(ratingValue), console.log("aaaaaabbbba", ratingValue)
                    // )}
                  >
                    <FontAwesome
                      name="star"
                      color={ratingValue <= checkRating ? "yellow" : "black"}
                      size={20}
                      style={{ margin: 1 }}
                    />
                  </TouchableOpacity>
                  // </Label>
                );
              })}
            </View>
            {/* <Text style={{ fontSize: 20 }}>{horseId.rating}</Text> */}
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 14,
                marginHorizontal: 5,
                color: "gray",
                fontFamily: "sans-serif-medium",
              }}
            >
              Хүйс
            </Text>
            <Text style={{ fontSize: 20 }}> {horseId.gender}</Text>
          </View>
        </View>
        <View
          style={{
            // backgroundColor: "pink",
            marginVertical: 10,
            marginHorizontal: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 14,
                color: "gray",
                fontFamily: "sans-serif-medium",
              }}
            >
              {" "}
              Мэдээлэл
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 14 }}> {horseId.info}</Text>
          </View>
        </View>
      </View>
      <View style={css.buttonView}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => props.navigation.goBack()}
          style={{ ...css.appButtonContainer, backgroundColor: "#34568b" }}
        >
          <Text style={css.appButtonText}>Буцах</Text>
        </TouchableOpacity>

        {/* <Button onPress={() => props.navigation.goBack()} title="Буцах" /> */}
        {state.userRole === "admin" && (
          <View //style={{ marginBottom: 100, top: 20 }}
          >
            {/* <Button onPress={deleteOneHorse} title="Устгах" /> */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={deleteOneHorse}
              style={{ ...css.appButtonContainer, backgroundColor: "#bc243c" }}
            >
              <Text style={css.appButtonText}>Устгах</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View>
        <Tree horseId={treeData?._id} />
      </View>

      <View>
        <Comments horseDetail={horseId} setMessage={setMessage} />
      </View>
    </ScrollView>
  );
};

export default HorseDetailScreen;

const css = StyleSheet.create({
  buttonView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  appButtonContainer: {
    // flex: 1,
    elevation: 8,
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
  customRatingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  starImgStyle: { width: 40, height: 40, resizeMode: "cover" },
});
