import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { url } from "../../Constants";

const thousandify = require("thousandify"); //mungun temdegtiin myngatiin orongoor , tawina

import { useNavigation } from "@react-navigation/native"; //React context Api ashiglaj hiij bga

const Horse = ({ data }) => {
  const navigation = useNavigation();
  // console.log(data._id, "data ./.././././");
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { horse: data })}
      // onPress={() => navigation.navigate("Detail", { id: data._id })} //parameter damjuulalt,, detail n id g huleej awah bolomjtoi blson
      style={{
        marginLeft: 8,
        // marginVertical: 10,
        // width: 100,
      }}
    >
      {/* {data.photo.startsWith("/") ? (
        <Image
          style={{
            width: "170",
            height: 130,
            //alignSelf: "center"
          }}
          source={{
            // uri: `http://192.168.1.94:5001/profile/` + horseId.photo,
            uri: `${url}/profile/` + data.photo,
          }}
        />
      ) : (
        <Image
          style={{
            width: "170",
            height: 130,
            //alignSelf: "center"
          }}
          source={{
            // uri: `http://192.168.1.94:5001/profile/` + horseId.photo,
            uri: url + "/upload/" + data.photo,
          }}
        />
      )} */}

      <Image
        style={{ width: 170, height: 130 }}
        source={{
          uri: `${url}/profile/` + data.photo,
          // uri: `http://192.168.1.94:5001/profile/` + data.photo,
        }}
      />

      <Text style={{ marginLeft: 10, fontSize: 12, marginTop: 10 }}>
        {data.name}
      </Text>
      <Text
        style={{ marginLeft: 10, top: 5, fontSize: 12, fontWeight: "bold" }}
      >
        {data.author}
      </Text>
    </TouchableOpacity>
  );
};

export default Horse;

const css = StyleSheet.create({});
