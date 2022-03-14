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
// import axios from "axios";

import useHorse from "../hooks/useHorse";
import UserContext from "../context/userContext";

const HorseDetailScreen = (props) => {
  // // console.log("--props navig --", props.navigation);
  // // console.log("--avig --", props.route.params);

  // //const horse = props.route.params.horse;

  const { id } = props.route.params.horse; //

  const [horse, error, deleteHorse] = useHorse(props.route.params.horse._id);
  console.log(horse, "horse");

  const state = useContext(UserContext);
  // console.log(state, "state context");
  // console.log(props.data, "props route");
  const horseId = props.route.params.horse;
  // console.log(horse, " horsehorsea ---- horse ");

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

  return (
    <ScrollView //style={{ padding: 25 }}
      showsVerticalScrollIndicator={false}
    >
      <Image
        style={{
          width: "100%",
          height: 250,
          //alignSelf: "center"
        }}
        source={{
          uri: `http://192.168.1.94:5000/profile/` + horseId.photo,
        }}
      />
      <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Нэр: {horseId.name}
        </Text>
        <Text>Эцэг: {horseId.father}</Text>
        <Text>Эх: {horseId.mother}</Text>
        <Text>Зүс: {horseId.color}</Text>
        <Text>Угшил: {horseId.pedigree}</Text>
        <Text>Эзэн: {horseId.owner}</Text>
        <Text>Нутаг: {horseId.country}</Text>
        <Text>Уяач: {horseId.sire}</Text>
        <Text>Хүйс: {horseId.gender}</Text>
        <Text style={{ fontSize: 14 }}>Мэдээлэл: {horseId.info}</Text>
      </View>
      <Button onPress={() => props.navigation.goBack()} title="Back" />
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
