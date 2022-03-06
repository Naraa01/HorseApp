import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const MyHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={25}
      color="white"
    />
  );
};

export default MyHeaderButton;

const css = StyleSheet.create({});
