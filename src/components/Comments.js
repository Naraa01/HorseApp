import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Image,
  Alert,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import MyButton from "./MyButton";
import { mainColor, randomColor, url } from "../../Constants";
import axios from "axios";
import UserContext from "../context/userContext";
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import moment from "moment";

const Comments = (props) => {
  const [comments, setComments] = useState("");
  const [data, setData] = useState();
  const state = useContext(UserContext);

  useEffect(async () => {
    // saveComment();
    await getComments();
  }, [props.horseDetail._id]);

  const checkComment = (value) => {
    setComments(value);
  };

  const saveComment = (body) => {
    // if (!props.horseDetail._id) {
    // }
    const params = {
      comment: comments,
      userId: state.userId,
      horseId: props.horseDetail._id,
      userName: state.userName,
    };
    axios
      .post(`${url}/comments`, params)
      .then((res) => {
        console.log(res, "comment res");
        setComments(null);
        showMessage({
          message: "Амжилттай",
          // description: "This is our second message",
          type: "success",
        });
        props.setMessage(true);
        getComments();
      })
      .catch((e) => {
        console.log(e, "comment error");
      });
  };

  const getComments = () => {
    axios
      .get(`${url}/horsesM/comments/${props.horseDetail._id}`)
      .then((res) => {
        setData(res.data.data);
        // setComments(null);
        // showMessage({
        //   message: "Амжилттай",
        //   // description: "This is our second message",
        //   type: "success",
        // });
        // props.setMessage(true);
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
        paddingVertical: 18,
        paddingHorizontal: 25,
      }}
    >
      <FlashMessage position="top" />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View>
          <Text style={{ fontSize: 20 }}>Сэтгэгдэл</Text>
        </View>
        {/* <View
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
        </View> */}
      </View>
      <View
        style={{
          height: 140,
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
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={saveComment}
            style={{
              ...css.appButtonContainer,
              backgroundColor: "#f1f1f1",
            }}
          >
            <Text style={css.appButtonText}>Илгээх</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        {data ? (
          data.map((el) => {
            return (
              <View style={css.commentsList}>
                <View style={{ flexDirection: "row", paddingBottom: 20 }}>
                  <View
                    style={{
                      height: "100%",
                      flex: 1,
                      flexDirection: "row",
                      icon: "layers",
                      // marginHorizontal: 10,
                      // justifyContent: "flex-end",
                      alignItems: "center",
                      // backgroundColor: "yellow",
                    }}
                  >
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#dce0e6",
                        borderRadius: 100,
                        marginRight: 10,
                      }}
                      source={require("../../assets/people/male6_85212.png")}
                    />
                    <Text>{el.userName}</Text>
                  </View>
                  <View
                    style={{
                      // flex: 1,
                      flexDirection: "row",
                      // justifyContent: "flex-end",
                      // marginHorizontal: 10,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#9ea2a8",
                        // flex: 1,
                        // backgroundColor: "pink",
                        // justifyContent: "flex-end",
                        // alignItems: "flex-end",
                        // alignContent: "flex-end",
                        // alignSelf: "flex-end",
                      }}
                    >
                      {moment(el.createdAt).fromNow()}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text>{el.comment}</Text>
                </View>
              </View>
            );
          })
        ) : (
          <Text>Сэтгэгдэл Байхгүй</Text>
        )}
      </View>
    </View>
  );
};

export default Comments;

const css = StyleSheet.create({
  appButtonContainer: {
    // flex: 1,
    elevation: 8,
    width: 90,
    borderRadius: 20,
    marginHorizontal: 16,
    marginVertical: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    // alignItems: "flex-end",
    justifyContent: "center",
  },
  appButtonText: {
    fontSize: 14,
    color: "#34568b",
    alignSelf: "center",
    fontWeight: "bold",
    // textTransform: "uppercase",
  },
  commentsList: {
    // marginVertical: 20,
    paddingVertical: 20,
    borderBottomColor: "#a8b0bd",
    borderBottomWidth: 2,
  },
});
