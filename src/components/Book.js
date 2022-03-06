import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const thousandify = require("thousandify"); //mungun temdegtiin myngatiin orongoor , tawina

import { useNavigation } from "@react-navigation/native"; //React context Api ashiglaj hiij bga

const Book = ({ data3 }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      // onPress={() => navigation.navigate("Detail", { book: data3 })}
      onPress={() => navigation.navigate("Detail", { id: data3.id })}
      style={{
        marginLeft: 15,
        marginVertical: 15,
        width: 150,
      }}
    >
      <Image
        style={{ width: 150, height: 250, marginRight: 15 }}
        source={{
          uri: `https://data.internom.mn/media/images/` + data3.photo,
        }}
      />
      <Text style={{ marginLeft: 10, fontSize: 12, marginTop: 10 }}>
        {data3.name}
      </Text>
      <Text
        style={{ marginLeft: 10, top: 5, fontSize: 12, fontWeight: "bold" }}
      >
        {data3.author}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ marginRight: 10, fontWeight: "bold", fontSize: 18 }}>
          {thousandify(data3.price)}₮
        </Text>

        <Text style={{ marginRight: 0, fontSize: 12, color: "gray" }}>
          {data3.balance > 0 ? `${data3.balance}ш` : null}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Book;

const css = StyleSheet.create({});
