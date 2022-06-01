import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { url } from "../../Constants";

const thousandify = require("thousandify"); //mungun temdegtiin myngatiin orongoor , tawina

import { useNavigation } from "@react-navigation/native"; //React context Api ashiglaj hiij bga

const Gender = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("GenderList", { horse: data })}
      // onPress={() => navigation.navigate("Detail", { id: data._id })} //parameter damjuulalt,, detail n id g huleej awah bolomjtoi blson
      style={{
        paddingHorizontal: 10,
        // marginLeft: 8,
        // marginVertical: 10,
        // width: 100,
      }}
    >
      <Image
        style={{ width: 190, height: 190, borderRadius: 30 }}
        source={{
          uri: `${url}/profile/` + data.photo,
          // uri: `http://192.168.1.94:5001/profile/` + data.photo,
        }}
      />

      <Text
        style={{
          marginLeft: 10,
          fontSize: 16,
          fontFamily: "serif",
          marginTop: 10,
          marginBottom: 4,
        }}
      >
        {data.name}
      </Text>
      {/* <Text style={{ marginLeft: 10, fontSize: 12, marginTop: 10 }}>
        {data.owner}
      </Text> */}
      {/* <Text
        style={{ marginLeft: 10, top: 5, fontSize: 12, fontWeight: "bold" }}
      >
        {data.author}
      </Text> */}
    </TouchableOpacity>
  );
};

export default Gender;

const css = StyleSheet.create({});
