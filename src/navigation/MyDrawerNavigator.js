import React, { useContext } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
// import MyStackNavigator from "./MyStackNavigator";
// import { randomHex } from "randomize-hex";
// const color = randomHex();

import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import HorseDetailScreen from "../screens/HorseDetailScreen";
import SplashScreen from "../screens/SplashScreen";
import HorseAdd from "../screens/HorseAdd";
import SettingsScreen from "../screens/SettingsScreen";

import { mainColor } from "../../Constants";

import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

import UserContext from "../context/userContext";
import GenderList from "../screens/GenderListScreen";
import HorsesAll from "../components/HorsesAll";

export default () => {
  const state = useContext(UserContext);

  if (state.isLoading === true) {
    return <SplashScreen />;
  }

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Гарал үүсэл",
          headerStyle: { backgroundColor: mainColor },
        }}
      />
      {state.isLoggedIn ? (
        <>
          {/* {state.userRole === "admin" && (
            <Drawer.Screen
              name="Шинэ морь нэмэх"
              component={HorseAdd}
              options={{ headerShown: false }}
            />
          )} */}
          <Drawer.Screen
            name="Шинэ морь нэмэх"
            component={HorseAdd}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Тохиргоо"
            component={SettingsScreen}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Гарах"
            component={HomeScreen}
            listeners={() => {
              state.logout();
            }} //event bolgond duudagdana
            options={{
              title: "Гарах",
            }}
          />
        </>
      ) : (
        <>
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
        </>
      )}

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
        name="Details"
        component={HorseDetailScreen}
        options={{
          title: "Морь дэлгэрэнгүй",
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
      <Drawer.Screen
        name="GenderList"
        component={GenderList}
        options={{
          title: "Морь",
        }}
      />
    </Drawer.Navigator>
  );
};
