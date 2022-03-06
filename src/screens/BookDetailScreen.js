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

import useBook from "../hooks/useBook";

const BookDetailScreen = (props) => {
  // console.log("--props navig --", props.navigation);
  // console.log("--avig --", props.route.params);

  // const book = props.route.params.book;
  //console.log(book);

  const { id } = props.route.params;

  const [book, error] = useBook(id);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Feather
          name="menu"
          size={24}
          style={{ marginRight: 15 }}
          color="white"
          onPress={() => {
            console.log("Hewlele");
          }}
        />
      ),
      //
    });
  }, [props.navigation]);

  if (error) {
    return <Text style={{ color: "red" }}>Aldaa garlaa Meedku hna iin</Text>;
  }

  if (!book) {
    //book n null baihiin bol
    return null;
  }

  return (
    <ScrollView style={{ padding: 25 }}>
      <Image
        style={{ width: 300, height: 400, alignSelf: "center" }}
        source={{ uri: `https://data.internom.mn/media/images/` + book.photo }}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", padding: 10 }}>
        {book.name}
      </Text>
      <Text>{book.content}</Text>
      <Button onPress={() => props.navigation.goBack()} title="Back" />
    </ScrollView>
  );
};

export default BookDetailScreen;

const css = StyleSheet.create({});
