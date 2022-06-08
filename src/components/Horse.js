import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { url } from "../../Constants";

const thousandify = require("thousandify");
import { useNavigation } from "@react-navigation/native";

const Horse = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { horse: data })}
      style={{
        marginLeft: 8,
      }}
    >
      <Image
        style={{ width: 200, height: 140, borderRadius: 15 }}
        source={{
          uri: `${url}/profile/` + data.photo,
          // uri: `http://192.168.1.94:5001/profile/` + data.photo,
        }}
      />

      <Text style={{ marginLeft: 10, fontSize: 14, marginTop: 10 }}>
        {data.name}
      </Text>
      {/* <Text style={{ marginLeft: 10, fontSize: 12, marginTop: 10 }}>
        {data.owner}
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
