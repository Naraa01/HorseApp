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
//     }}
//     initialRouteName="Home"
//   >
//     <Stack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={({ navigation }) => ({
//         title: "Home",
//       })}
//     />
//     <Stack.Screen
//       name="Detail"
//       component={HorseDetailScreen}
//       options={{
//         title: "Horse Detail",
//       }}
//     />
//   </Stack.Navigator>
// );
