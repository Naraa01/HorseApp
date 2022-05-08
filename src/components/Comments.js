import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import MyButton from "./MyButton";
import { mainColor, randomColor, url } from "../../Constants";
import axios from "axios";

const Comments = () => {
  const [comments, setComments] = useState("");

  // useEffect(() => {
  //   saveComment();
  // }, [comments]);

  const checkComment = (value) => {
    setComments(value);
  };

  const saveComment = (body) => {
    console.log(comments, "yu irjin body goot");
    axios
      .post(`${url}/comments`, comments)
      .then((res) => {
        console.log(res, "comment res");
      })
      .catch((e) => {
        console.log(e, "comment error");
      });
  };

  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        borderColor: mainColor,
        borderStyle: "solid",
        // borderWidth: 0.5,
        margin: 20,
        paddingVertical: 15,
        paddingHorizontal: 25,
      }}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View>
          <Text style={{ fontSize: 20 }}>Comments</Text>
        </View>
        <View
          style={{
            // backgroundColor: "yellow",
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            marginHorizontal: 10,
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                backgroundColor: "#F4F4F4",
                borderColor: "#F4F4F4",
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderWidth: 0.5,
                borderTopLeftRadius: 6,
                borderBottomLeftRadius: 6,
              }}
            >
              Latest
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              backgroundColor: "#FEFEFE",
              borderColor: "#F1F1F1",
              paddingHorizontal: 10,
              paddingVertical: 2,
              borderWidth: 0.5,
              borderTopRightRadius: 6,
              borderBottomRightRadius: 6,
            }}
          >
            Popular
          </Text>
        </View>
      </View>

      <View
        style={{
          height: 120,
          marginVertical: 12,
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
          borderColor: mainColor,
        }}
      >
        <TextInput
          value={comments}
          onChangeText={checkComment}
          style={{
            height: "60%",
            // margin: 12,
            // borderBottomStartRadius: 2,
            borderBottomWidth: 1,
            borderBottomColor: "#DEDEDE",
            // padding: 10,
            // borderRadius: 10,
            // borderColor: mainColor,
          }}
        />
        <TouchableOpacity
          // onClick={saveComment}
          onPress={saveComment}
          style={{ alignItems: "flex-end", paddingRight: 20, paddingTop: 13 }}
        >
          <Text style={{ justifyContent: "center" }}>Send</Text>
        </TouchableOpacity>
      </View>
      {/* <Button style={css.button}>Hello world BUtton</Button> */}
      <View style={css.button}>
        {/* <Button color={"none"} title="Устгах" /> */}
      </View>
      <TouchableOpacity style={css.button}>
        <Text>hello</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Comments;

const css = StyleSheet.create({
  button: {
    alignItems: "center",
    textShadowColor: "pink",
    borderRadius: 6,
    // position: "relative",
    // flex: 1,
    backgroundColor: "pink",
    // justifyContent: "center",
    width: "40%",
    height: 20,
  },
  // button: {
  //   alignItems: "center",
  //   appearance: "none",
  //   // backgroundImage: radial-gradient(100% 100% at '100%' '0', '#5adaff' '0', '#5468ff' '100%'),
  //   border: 0,
  //   borderRadius: 6,
  //   // boxShadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset,
  //   boxSizing: "border-box",
  //   color: "#fff",
  //   cursor: "pointer",
  //   display: "inline-flex",
  //   // font-family: "JetBrains Mono",monospace,
  //   height: 48,
  //   justifyContent: "center",
  //   lineHeight: 1,
  //   listStyle: "none",
  //   overflow: "hidden",
  //   paddingLeft: 16,
  //   paddingRight: 16,
  //   position: "relative",
  //   textAlign: "left",
  //   textDecoration: "none",
  //   // transition: box-shadow, .15,transform, .15,
  //   userSelect: "none",
  //   webkitUserSelect: "none",
  //   touchAction: "manipulation",
  //   whiteSpace: "nowrap",
  //   willChange: "box-shadow",
  //   // transform,
  //   fontSize: 18,
  // },
  // // button:focus {
  // //   box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  // // }
  // // .button-29:hover {
  // //   box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  // //   transform: translateY(-2px);
  // // }
  // // .button-29:active {
  // //   box-shadow: #3c4fe0 0 3px 7px inset;
  // //   transform: translateY(2px);
  // // }
});
