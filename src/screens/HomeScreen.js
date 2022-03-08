import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
} from "react-native";

import Search from "../components/Search";
import GenderHorsesList from "../components/GenderHorsesList";
import Spinner from "../components/Spinner";
// import MyHeaderButton from "../components/MyHeaderButton";

import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";
import { Feather } from "@expo/vector-icons";
import useGender from "../hooks/useGender";

const HomeScreen = ({ navigation }) => {
  const [localSearchText, setLocalSearchText] = useState("");
  const [serverSearchText, setServerSearchText] = useState("");

  const [genders, errorMsg, loading] = useGender();

  // console.log(navigation, "props");
  useLayoutEffect(() => {
    // navigation.setOptions({
    //   headerRight: () => (
    //     <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
    //       <Item title="Tses" iconName="menu" onPress={() => alert("search")} />
    //     </HeaderButtons>
    //   ),
    // });
  }, [navigation, localSearchText]); //useEffectte adilhanduu func

  const searchHorseFromServer = () => {
    console.log(`Serveress ${localSearchText} utgaar haij ehellee...`);
    setServerSearchText(localSearchText);
    console.log(serverSearchText);
  };

  // console.log("----", navigation);
  //navigation dotor navigate gj bga ter n huudas hoorond solih func ym
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? (
        <Spinner />
      ) : (
        <View>
          <Search
            value={localSearchText}
            onValueChange={setLocalSearchText}
            onFinishEnter={searchHorseFromServer}
          />
          {errorMsg && ( //errorMsg bhin bol Text ajillahgu
            <Text style={{ color: "red", marginHorizontal: 20, top: 20 }}>
              {errorMsg}
            </Text>
          )}

          <ScrollView style={{ marginTop: 20 }}>
            {genders.map((el) => (
              <GenderHorsesList
                navigation={navigation}
                searchLocalValue={localSearchText}
                searchServerValue={serverSearchText} //localSearchText ugchhin bol useg shiweh bolgond unshij bga
                key={el._id}
                data={el}
                style={{ marginVertical: 10 }}
              />
            ))}
          </ScrollView>
        </View>
      )}
      {/* {errorMsg ? (
        <Text style={{ color: "red", marginHorizontal: 20 }}>{errorMsg}</Text>
      ) : null} */}
    </View>
  );
};

export default HomeScreen;

const css = StyleSheet.create({});
