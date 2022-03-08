// import React from "react";
// import { Alert } from "react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import HomeScreen from "../screens/HomeScreen";
// import HorseDetailScreen from "../screens/HorseDetailScreen";

// import { randomHex } from "randomize-hex";
// const color = randomHex();

// const Stack = createNativeStackNavigator();

// export default () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerStyle: { backgroundColor: color },
//       // headerTintColor: "white",
//       // headerTitleStyle: { fontSize: 15 },
//     }}
//     initialRouteName="Home"
//   >
//     <Stack.Screen
//       //Screen n uru HomeScreen bolon HorseDetail ruu l navigation damjuulnaa,, comp bolh Horse.js, Category ntr luu damjuulahgu
//       //HomeScreen d navigation bgn bol teriigre HomeScreen ees damjuulj bolno // props oor damjuulaad bh n neg arga
//       //2doh arga n useNavigation - ashiglaad shuud ter gazraa ashiglaj bolno, Horse.js deer ashiglasan
//       name="Home"
//       component={HomeScreen}
//       options={({ navigation }) => ({
//         title: "Амазон номын дэлгүүр",
//         //
//         // headerRight: () => (
//         //   <Button
//         //     title="Цэс"
//         //     onPress={() => navigation.navigate("Detail", { id: "1" })}
//         //   />
//         // ),
//         // headerLeft: () => (
//         //   <View style={{ marginHorizontal: 15 }}>
//         //     <Button
//         //       title="But"
//         //       onPress={() => navigation.navigate("Detail", { id: "1" })}
//         //     />
//         //   </View>
//         // ),
//       })} //ingej uurchilj bolno deer bga home enee teree gsn utasnii deed hesgiig
//     />
//     <Stack.Screen
//       name="Detail"
//       component={HorseDetailScreen}
//       options={{
//         title: "Horse Detail",
//         // headerBackTitleVisible: true, //iphone <back towchiin back ugiig alga bolgoh //only iphone yrunhiiduu ihenh n only iphone bololtoi
//         // headerBackTitle: "Butsah", //Back gdg ugiig uurchluh
//         // headerTruncatedBackTitle: "b", //bagtahgu bga uyd
//         // headerLeftContainerStyle: { padding: 10 },
//         // headerTransparent: true, //ajillaad bga ym ene l bh shg bhn
//         // headerBackground: () => (
//         //   <Text style={{ backgroundColor: "black", height: 200 }}>
//         //     Heel
//         //   </Text>
//         //   // <BlurView
//         //   //   tint="light"
//         //   //   intensity={100}
//         //   //   style={StyleSheet.absoluteFill}
//         //   // />
//         // ),
//       }}
//     />
//   </Stack.Navigator>
// );
