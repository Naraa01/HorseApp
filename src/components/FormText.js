import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import React from "react";
import { mainColor, textColor } from "../../Constants";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";

const FormText = (props) => {
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
        <TextInput
          {...props} // placeholder={props.placeholder} -- ene 2 adilhan placeholder oos uur c ym awah bolomjtoi blno
          style={{
            paddingLeft: 10,
            color: textColor,
            flex: 1,
            marginTop: Platform.OS === "ios" ? 0 : -3,
          }}
        />
        {props.errorShow === false && (
          <Animatable.View animation="bounceIn" duration={700}>
            <Feather name="check-circle" size={15} color="#3DBE29" />
          </Animatable.View>
        )}
      </View>
      {props.errorShow && (
        <Animatable.Text
          animation="fadeInLeft"
          duration={600}
          style={{ color: "#FF6666", fontSize: 12, marginTop: 4 }}
        >
          {props.errorText}
        </Animatable.Text>
      )}
    </View>
  );
};

export default FormText;

const styles = StyleSheet.create({});
