import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { Feather } from "@expo/vector-icons";
// import axios from "axios";

import useHorse from "../hooks/useHorse";

const HorseDetailScreen = (props) => {
  // // console.log("--props navig --", props.navigation);
  // // console.log("--avig --", props.route.params);

  // //const horse = props.route.params.horse;

  // const { id } = props.route.params.id; //

  // const [horse, error] = useHorse(id);

  // // console.log(props, "props -------------------");
  // // console.log(horse, "horse****---");
  // console.log(props.route.params, "oryte params route *-*-*-*--");
  // console.log(props.route.params, "oryte params route *-*-*-*--");
  const aaa = props.route.params.horse;
  console.log(aaa.name, " aaaaaaa ---- aaa ");
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

  return (
    <ScrollView style={{ padding: 25 }}>
      {/* <Image
        style={{ width: 100, height: 150, alignSelf: "center" }}
        source={{ uri: `http://192.168.1.94:5000/profile/` + horse.photo }}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", padding: 10 }}>
        {horse.name}
      </Text>
      <Text>{horse.gender}</Text> */}
      <Text>{props.route.params.color}</Text>
      <Image
        style={{ width: 100, height: 150, alignSelf: "center" }}
        source={{
          uri: `http://192.168.1.94:5000/profile/` + aaa.photo,
        }}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", padding: 10 }}>
        {aaa.name}
      </Text>
      <Text>{aaa.gender}</Text>
      <Button onPress={() => props.navigation.goBack()} title="Back" />
    </ScrollView>
  );
};

export default HorseDetailScreen;

const css = StyleSheet.create({});
