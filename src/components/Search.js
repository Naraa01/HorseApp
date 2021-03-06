import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

import { FontAwesome5 } from "@expo/vector-icons";

const Search = ({ value, onValueChange, onFinishEnter }) => {
  return (
    <View style={css.searchPanel}>
      <FontAwesome5 name="search" style={css.searchIcon} />
      <TextInput
        value={value}
        onChangeText={onValueChange}
        style={css.searchText}
        placeholder="Search"
        placeholderTextColor={"#242B2E"}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onFinishEnter}
      />
    </View>
  );
};

export default Search;

const css = StyleSheet.create({
  searchPanel: {
    top: 15,
    height: 50,
    backgroundColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
  },
  searchText: {
    color: "white",
    fontSize: 18,
    flex: 1,
  },
  searchIcon: {
    color: "black",
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
