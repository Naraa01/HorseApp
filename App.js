//useLayoutEffect -

//StackNavigation menu hoorond shiljih bolomjiig udgug

//promise--> .then, .catch
//try catch
// async, await
import { Button, Text, View, Alert, StyleSheet } from "react-native";
// import { BlurView } from "expo-blur";
import { NavigationContainer } from "@react-navigation/native"; //

import MyDrawerNavigator from "./src/navigation/MyDrawerNavigator";
import MyStackNavigator from "./src/navigation/MyStackNavigator";

function App() {
  return (
    <NavigationContainer>
      {/* <MyStackNavigator /> */}
      <MyDrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
