import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserContext from "../context/userContext";

const SplashScreen = () => {
  const state = useContext(UserContext);
  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((data) => {
        console.log("##### userInfo", data);

        if (data !== null) {
          const user = JSON.parse(data);
          console.log("####### user userInfo", user);
          state.setToken(user.token);
          state.setEmail(user.email);
          state.setUserName(user.userName);
          state.setUserRole(user.userRole);
          state.setIsLoggedIn(true);
          state.setUserId(user?._id);
        }
        state.setIsLoading(false);
      })
      .catch((e) => {
        console.log("Tokeniig utasnaas unshij chadsangui : " + e.message);
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <ActivityIndicator size="large" color="gray" />
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          top: 20,
          fontStyle: "italic",
        }}
      >
        Түр хүлээнэ үү...
      </Text>
    </View>
  );
};

export default SplashScreen;
