import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const thousandify = require("thousandify"); //mungun temdegtiin myngatiin orongoor , tawina

import { useNavigation } from "@react-navigation/native"; //React context Api ashiglaj hiij bga

const Horse = ({ data }) => {
  const navigation = useNavigation();
  // console.log(data._id, "data ./.././././");
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { horse: data })}
      // onPress={() => navigation.navigate("Detail", { id: data._id })} //parameter damjuulalt,, detail n id g huleej awah bolomjtoi blson
      style={{
        marginLeft: 15,
        marginVertical: 15,
        width: 150,
      }}
    >
      <Image
        style={{ width: 150, height: 250, marginRight: 15 }}
        source={{
          uri: `http://192.168.1.94:5000/profile/` + data.photo,
        }}
      />
      {/* <Text style={{ marginLeft: 10, fontSize: 12, marginTop: 10 }}>
        {data.name}
      </Text>
      <Text
        style={{ marginLeft: 10, top: 5, fontSize: 12, fontWeight: "bold" }}
      >
        {data.author}
      </Text> */}
    </TouchableOpacity>
  );
};

export default Horse;

const css = StyleSheet.create({});
