import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import MyStackNavigator from "./MyStackNavigator";

import { randomHex } from "randomize-hex";
const color = randomHex();

import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen
      name="Home"
      component={MyStackNavigator}
      options={{ title: "Am", headerStyle: { backgroundColor: color } }}
    />
    <Drawer.Screen name="SignUp" component={SignupScreen} />
    <Drawer.Screen name="Login" component={LoginScreen} />
  </Drawer.Navigator>
);
