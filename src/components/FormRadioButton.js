import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  RadioButton,
  Text as RadioText,
  TouchableRipple,
} from "react-native-paper";

import { mainColor, textColor } from "../../Constants";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";

export default (props) => {
  return (
    <View>
      <Text style={{ fontSize: 20, paddingTop: 15, color: textColor }}>
        {props.label}
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 13,
          borderBottomColor: "#f2f2f2",
          borderBottomWidth: 1,
          paddingBottom: 5,
        }}
      >
        <Feather name={props.icon} size={20} color={textColor} />

        <RadioButton.Group
          onValueChange={props.onValueChange}
          value={props.value}
        >
          <View>
            <RadioText>эр</RadioText>
            <RadioButton value="эр" />
          </View>
          <View>
            <RadioText>эм</RadioText>
            <RadioButton value="эм" />
          </View>
        </RadioButton.Group>

        {/* <View>
          {props.data.map((el, index) => {
            const genderOneId = props.values[index];
            return (
              <View key={index} style={css.row}>
                <RadioButton
                  color={mainColor}
                  value={genderOneId}
                  onPress={() => {
                    props.onValueChange(genderOneId);
                  }}
                  status={props.value === genderOneId ? "checked" : "unchecked"}
                />
                <TouchableRipple
                  onPress={() => {
                    props.onValueChange(genderOneId);
                  }}
                >
                  <RadioText style={css.text}>{el}</RadioText>
                </TouchableRipple>
              </View>
            );
          })}
        </View> */}
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  text: { marginTop: 8 },
  row: { flexDirection: "row", marginLeft: 10 },
});
