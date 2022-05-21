import React, { useState, useLayoutEffect, useContext } from "react";
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
import UserContext from "../context/userContext";
import CategoriesScreen from "./CategoriesScreen";
import GenderPublicHorses from "../components/GenderPublicHorses";
import GenderListScreen from "./GenderListScreen";
import HorsesAll from "../components/HorsesAll";

const HomeScreen = ({ navigation, route }) => {
  const [localSearchText, setLocalSearchText] = useState("");
  const [serverSearchText, setServerSearchText] = useState("");
  const [genders, errorMsg, loading] = useGender();
  const [refresh, setRefresh] = useState(false);

  const state = useContext(UserContext);

  if (route.params && route.params.deletedHorse) {
    Alert.alert(route.params.deletedHorse.name + ": устгагдлаа");
    delete route.params.deletedHorse;
    setRefresh(true);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerRight: () => (
      //   <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
      //     <Item title="Tses" iconName="menu" onPress={() => alert("search")} />
      //   </HeaderButtons>
      // ),
      title: state.userName ? "Welcome: " + state.userName : "Гарал үүсэл",
    });
  }, [navigation, localSearchText, state.userName]); //useEffectte adilhanduu func

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
          {/* <Search
            value={localSearchText}
            onValueChange={setLocalSearchText}
            onFinishEnter={searchHorseFromServer}
          />
          {errorMsg && ( //errorMsg bhin bol Text ajillahgu
            <Text style={{ color: "red", marginHorizontal: 20, top: 20 }}>
              {errorMsg}
            </Text>
          )} */}

          <ScrollView style={{ marginTop: 20 }}>
            <CategoriesScreen
              refresh={refresh}
              setRefresh={setRefresh}
              navigation={navigation}
              searchLocalValue={localSearchText}
              searchServerValue={serverSearchText}
              // key={el._id}
              // data={el}
              style={{ marginVertical: 10 }}
            />
            <View style={{ marginTop: 25, paddingHorizontal: 20 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  paddingHorizontal: 20,
                }}
              >
                Бүгд
              </Text>
              <HorsesAll />
            </View>

            {/* {genders.map((el) => (
              <GenderHorsesList
                refresh={refresh}
                setRefresh={setRefresh}
                navigation={navigation}
                searchLocalValue={localSearchText}
                searchServerValue={serverSearchText} //localSearchText ugchhin bol useg shiweh bolgond unshij bga
                key={el._id}
                data={el}
                style={{ marginVertical: 10 }}
              />
            ))} */}

            {/* {genders.map((el) => (
              <GenderPublicHorses
                refresh={refresh}
                setRefresh={setRefresh}
                navigation={navigation}
                searchLocalValue={localSearchText}
                searchServerValue={serverSearchText} //localSearchText ugchhin bol useg shiweh bolgond unshij bga
                key={el._id}
                data={el}
                style={{ marginVertical: 10 }}
              />
            ))} */}
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
