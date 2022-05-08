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

//

{
  /* <button class="button-29" role="button">Button 29</button> */
}

/* CSS */
// .button-29 {
//   align-items: center;
//   appearance: none;
//   background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
//   border: 0;
//   border-radius: 6px;
//   box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
//   box-sizing: border-box;
//   color: #fff;
//   cursor: pointer;
//   display: inline-flex;
//   font-family: "JetBrains Mono",monospace;
//   height: 48px;
//   justify-content: center;
//   line-height: 1;
//   list-style: none;
//   overflow: hidden;
//   padding-left: 16px;
//   padding-right: 16px;
//   position: relative;
//   text-align: left;
//   text-decoration: none;
//   transition: box-shadow .15s,transform .15s;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   white-space: nowrap;
//   will-change: box-shadow,transform;
//   font-size: 18px;
// }

// .button-29:focus {
//   box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
// }

// .button-29:hover {
//   box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
//   transform: translateY(-2px);
// }

// .button-29:active {
//   box-shadow: #3c4fe0 0 3px 7px inset;
//   transform: translateY(2px);
// }
