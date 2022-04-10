import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Alert,
  Platform,
  Button,
  Image,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { mainColor, lightColor, url } from "../../Constants";

import FormText from "../components/FormText";
import * as Animatable from "react-native-animatable";
import FormSwitch from "../components/FormSwitch";
import FormPicker from "../components/FormPicker";
import useGender from "../hooks/useGender";
import Spinner from "../components/Spinner";
import MyButton from "../components/MyButton";
import FormRadioButton from "../components/FormRadioButton";
import axios from "axios";
import UserContext from "../context/userContext";

import * as ImagePicker from "expo-image-picker";
import * as Linking from "expo-linking";
import { startActivityAsync, ActivityAction } from "expo-intent-launcher";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

const SettingsScreen = (props) => {
  // const [alarm, setAlarm] = useState("Сануулна");
  const [alarm, setAlarm] = useState(false);
  const [notificationId, setNotificationId] = useState(null);

  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((res) => {
        if (res.status !== "granted") {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then((res) => console.log(res, "per res"))
            .catch((e) => console.log(e, "per e"));
        }
      })
      .catch((e) => console.log(e, "per gadnah"));

    AsyncStorage.getItem("notificationId")
      .then((res) => {
        console.log(res, "res"), setNotificationId(res);
      })
      .catch((e) => console.log(e, "error"));

    AsyncStorage.getItem("alarm")
      .then((res) => {
        console.log(res, "res"), setAlarm(JSON.parse(res).alarm);
      })
      .catch((e) => console.log(e, "error"));
  }, []);

  const toggleAlarm = () => {
    setAlarm((alarm) => {
      const newValue = !alarm;
      console.log(newValue, "newValue");

      if (newValue) {
        Notifications.scheduleNotificationAsync({
          content: {
            title: "Анхаар! 📬",
            bode: "Шинээр нэмэгдлээ",
            //sound: 'mySoundFile.wav', // Provide ONLY the base filename
          },
          trigger: {
            seconds: 5,
            // repeats: true,
            // channelId: 'new-emails',
          },
        })
          .then((id) => {
            console.log("alarm: ", id);
            setNotificationId(id);
            AsyncStorage.setItem("notificationId", id);
          })
          .catch((e) => console.log(e, "setNotificationId error"));
      } else {
        Notifications.cancelScheduledNotificationAsync(notificationId)
          .then(() => {
            setNotificationId(null);
            AsyncStorage.removeItem("notificationId");
            console.log("alarm cancelled ");
          })
          .catch((e) => console.log(e, "setNotificationId error"));
      }

      AsyncStorage.setItem("alarm", JSON.stringify({ alarm: newValue }));
      return newValue;
    });
    // setAlarm(!alarm);
    // // setAlarm(alarm === "Сануулна" ? "Сануулахгүй" : "Сануулна");
    // AsyncStorage.setItem("alarm", JSON.stringify({ alarm }));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: mainColor }}>
      <StatusBar backgroundColor={mainColor} barStyle="dark-content" />
      <View
        style={{
          flex: 1,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: mainColor,
        }}
      >
        <Text style={{ fontSize: 30, color: lightColor }}>Тохиргоо</Text>
        <Text style={{ fontSize: 14, color: lightColor, marginTop: 10 }}>
          Тохиргоо хэсэг
        </Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        duration={500}
        style={{
          flex: 5,
          paddingVertical: 30,
          paddingHorizontal: 20,
          backgroundColor: "#fff",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <FormSwitch
            label="Сануулах эсэх"
            icon="clock"
            data={["Сануулна", "Сануулахгүй"]}
            value={alarm}
            onValueChange={toggleAlarm}
          />
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
