import { StyleSheet, Text, View, Picker } from "react-native";
import React from "react";
import { mainColor, textColor } from "../../Constants";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";

const FormPicker = (props) => {
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

        <Picker
          selectedValue={props.value}
          onValueChange={props.onValueChange}
          style={{ flex: 1, marginTop: -15 }}
          // itemStyle={{ color: mainColor, backgroundColor: "brown" }}
        >
          {props.data.map((genderId, index) => (
            <Picker.Item
              key={index}
              label={genderId}
              value={props.values[index]}
            ></Picker.Item>
          ))}
          {/* <Picker.Item label="Азарга" value="genderId"></Picker.Item> */}
          {/* <Picker.Item label="Их нас" value="genderId" color="red" ></Picker.Item>
          <Picker.Item label="Соёолон" value="genderId"></Picker.Item>
          <Picker.Item label="Хязаалан" value="genderId"></Picker.Item>
          <Picker.Item label="Шүдлэн" value="genderId"></Picker.Item>
          <Picker.Item label="Даага" value="genderId"></Picker.Item> */}
        </Picker>
      </View>
    </View>
  );
};

export default FormPicker;

const styles = StyleSheet.create({});
