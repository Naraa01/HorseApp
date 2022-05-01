import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState, useLayoutEffect, useContext } from "react";
import { Feather } from "@expo/vector-icons";
import { url } from "../../Constants";
// import axios from "axios";

import useHorse from "../hooks/useHorse";
import UserContext from "../context/userContext";

const HorseDetailScreen = (props) => {
  // // console.log("--props navig --", props.navigation);
  // // console.log("--avig --", props.route.params);

  // //const horse = props.route.params.horse;

  const { id } = props.route.params.horse; //

  const [horse, error, deleteHorse] = useHorse(props.route.params.horse._id);

  // console.log(id, "id ------ horsedetailscreen");
  // console.log(props.route.params.horse._id, "horse props route");
  // console.log(horse, "horse");

  const state = useContext(UserContext);
  // console.log(state, "state context");
  // console.log(props.data, "props route");
  const horseId = props.route.params.horse;
  // console.log(horseId, " horseId ----");

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
              }}
            >
              Эцэг
            </Text>
            <Text style={{ fontSize: 20 }}> {horseId.father}</Text>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontSize: 14, color: "gray" }}>Эх</Text>
            <Text style={{ fontSize: 20 }}>{horseId.mother}</Text>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontSize: 14, color: "gray" }}>Зүс</Text>
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
            <Text style={{ fontSize: 14, marginHorizontal: 5, color: "gray" }}>
              Угшил
            </Text>
            <Text style={{ fontSize: 20 }}> {horseId.pedigree}</Text>
          </View>
          <View
            style={{
              flex: 1,
              // marginHorizontal: 120,
              // backgroundColor: "yellow",
            }}
          >
            <Text style={{ fontSize: 14, marginHorizontal: 5, color: "gray" }}>
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
              }}
            >
              Нутаг
            </Text>
            <Text style={{ fontSize: 20 }}> {horseId.country}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, marginHorizontal: 5, color: "gray" }}>
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
            <Text style={{ fontSize: 14, marginHorizontal: 5, color: "gray" }}>
              Үнэлгээ
            </Text>
            <Text style={{ fontSize: 20 }}>{horseId.rating}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, marginHorizontal: 5, color: "gray" }}>
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
            <Text style={{ fontSize: 14, color: "gray" }}> Мэдээлэл</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20 }}> {horseId.info}</Text>
          </View>
        </View>
      </View>
      <Button onPress={() => props.navigation.goBack()} title="Буцах" />
      {state.userRole === "admin" && (
        <View style={{ marginBottom: 100, top: 20 }}>
          <Button onPress={deleteOneHorse} title="Устгах" />
        </View>
      )}
    </ScrollView>
  );
};

export default HorseDetailScreen;

const css = StyleSheet.create({});
