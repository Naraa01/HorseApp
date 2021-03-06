import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { url } from "../../Constants";
import { useNavigation } from "@react-navigation/native";
import useHorses from "../hooks/useHorses";
import Spinner from "../components/Spinner";
import useGender from "../hooks/useGender";
import Search from "../components/Search";

const thousandify = require("thousandify");

const GenderListScreen = (props) => {
  const [horses, errorMessage, searchBook, loading] = useHorses(
    props.route.params.horse._id,
    props.refresh,
    props.setRefresh
  );
  const [localSearchText, setLocalSearchText] = useState("");
  const [serverSearchText, setServerSearchText] = useState("");
  const [genders, errorMsg] = useGender();

  const searchHorseFromServer = () => {
    console.log(`Serveress ${localSearchText} utgaar haij ehellee...`);
    setServerSearchText(localSearchText);
    console.log(serverSearchText);
  };

  const navigation = useNavigation();

  const filteredHorse = horses.filter((el) =>
    el.name.toLowerCase().includes(serverSearchText.toLowerCase())
  );

  const dataPhoto = filteredHorse.photo ? filteredHorse.photo : horses.photo;
  const dataName = filteredHorse.name ? filteredHorse.name : horses.name;

  return (
    <View>
      {loading ? (
        <Spinner />
      ) : (
        <View style={{ paddingHorizontal: 20 }}>
          <Search
            value={localSearchText}
            onValueChange={setLocalSearchText}
            onFinishEnter={searchHorseFromServer}
          />
          {errorMsg && (
            <Text style={{ color: "red", marginHorizontal: 20, top: 20 }}>
              {errorMsg}
            </Text>
          )}
          <ScrollView style={{ marginTop: 20, marginBottom: 100 }}>
            {filteredHorse.map((data) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Details", { horse: data })
                  }
                  style={{
                    // backgroundColor: "cyan",
                    // paddingHorizontal: 10,
                    paddingVertical: 14,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ width: 160, height: 100, borderRadius: 20 }}
                    source={{
                      uri: `${url}/profile/` + data.photo,
                    }}
                  />
                  <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      {data.name}
                    </Text>
                    {/* <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        width: 200,
                      }}
                    >
                      {data.name}
                    </Text> */}
                    <Text
                    // style={{
                    //   fontSize: 14,
                    //   color: "gray",
                    //   width: 200,
                    // }}
                    >
                      <Text style={{ fontSize: 12, color: "gray" }}>??????: </Text>
                      <Text style={{ fontSize: 18 }}>{data.color}</Text>
                    </Text>
                    {data.owner ? (
                      <Text>
                        <Text style={{ fontSize: 12, color: "gray" }}>
                          ????????:{" "}
                        </Text>
                        <Text style={{ fontSize: 18 }}>{data.owner}</Text>
                      </Text>
                    ) : null}
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default GenderListScreen;

const styles = StyleSheet.create({});
