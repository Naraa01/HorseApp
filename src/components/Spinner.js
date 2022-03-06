import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

const Spinner = ({ showText = true }) => {
  return (
    <View style={{ alignItems: "center", marginVertical: 10 }}>
      <ActivityIndicator color="green" size="large" />
      {showText && (
        <Text style={{ top: 10, fontSize: 15 }}>Түр хүлээнэ үү...</Text>
      )}
    </View>
  );
};

export default Spinner;

const css = StyleSheet.create({});
