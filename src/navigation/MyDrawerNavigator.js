import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import MyStackNavigator from "./MyStackNavigator";

import { randomHex } from "randomize-hex";
const color = randomHex();

import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import HorseDetailScreen from "../screens/HorseDetailScreen";

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Гарал үүсэл",
        headerStyle: { backgroundColor: color },
      }}
    />
    <Drawer.Screen
      name="Signup"
      component={SignupScreen}
      options={{
        title: "Бүртгүүлэх",
      }}
    />
    <Drawer.Screen
      name="Login"
      component={LoginScreen}
      options={{
        title: "Нэвтрэх",
      }}
    />

    {/* <Drawer.Screen
      //Screen n uru HomeScreen bolon HorseDetail ruu l navigation damjuulnaa,, comp bolh Horse.js, Category ntr luu damjuulahgu
      //HomeScreen d navigation bgn bol teriigre HomeScreen ees damjuulj bolno // props oor damjuulaad bh n neg arga
      //2doh arga n useNavigation - ashiglaad shuud ter gazraa ashiglaj bolno, Horse.js deer ashiglasan
      name="Home"
      component={HomeScreen}
      options={({ navigation }) => ({
        title: "Амазон номын дэлгүүр",
        //
        // headerRight: () => (
        //   <Button
        //     title="Цэс"
        //     onPress={() => navigation.navigate("Detail", { id: "1" })}
        //   />
        // ),
        // headerLeft: () => (
        //   <View style={{ marginHorizontal: 15 }}>
        //     <Button
        //       title="But"
        //       onPress={() => navigation.navigate("Detail", { id: "1" })}
        //     />
        //   </View>
        // ),
      })} //ingej uurchilj bolno deer bga home enee teree gsn utasnii deed hesgiig
    /> */}
    <Drawer.Screen
      name="Detail"
      component={HorseDetailScreen}
      options={{
        title: "Horse Detail",
        // headerBackTitleVisible: true, //iphone <back towchiin back ugiig alga bolgoh //only iphone yrunhiiduu ihenh n only iphone bololtoi
        // headerBackTitle: "Butsah", //Back gdg ugiig uurchluh
        // headerTruncatedBackTitle: "b", //bagtahgu bga uyd
        // headerLeftContainerStyle: { padding: 10 },
        // headerTransparent: true, //ajillaad bga ym ene l bh shg bhn
        // headerBackground: () => (
        //   <Text style={{ backgroundColor: "black", height: 200 }}>
        //     Heel
        //   </Text>
        //   // <BlurView
        //   //   tint="light"
        //   //   intensity={100}
        //   //   style={StyleSheet.absoluteFill}
        //   // />
        // ),
      }}
    />
  </Drawer.Navigator>
);
