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
import { useNavigation } from "@react-navigation/native"; //React context Api ashiglaj hiij bga
import useHorses from "../hooks/useHorses";
import Spinner from "../components/Spinner";
import useGender from "../hooks/useGender";
import Search from "../components/Search";

const thousandify = require("thousandify"); //mungun temdegtiin myngatiin orongoor , tawina

const GenderListScreen = (props) => {
  const [horses, errorMessage, searchBook, loading] = useHorses(
    props.route.params.horse._id,
    props.refresh,
    props.setRefresh
  );
  const [localSearchText, setLocalSearchText] = useState("");
  const [serverSearchText, setServerSearchText] = useState("");
  // const [refresh, setRefresh] = useState(false);
  const [genders, errorMsg] = useGender();

  const searchHorseFromServer = () => {
    console.log(`Serveress ${localSearchText} utgaar haij ehellee...`);
    setServerSearchText(localSearchText);
    console.log(serverSearchText);
  };

  // useEffect(() => {
  //   props.setRefresh(!props.refresh);
  //   // filteredHorse;
  // }, [horses]);

  // console.log("horses ---> ", horses);
  // console.log("props ---> ", props);
  const navigation = useNavigation();

  const filteredHorse = horses.filter(
    (el) => el.name.toLowerCase().includes(serverSearchText.toLowerCase()) //toLowerCase() bugdiin jijgeer hmgu haina
  );
  // console.log("filteredHorsefilteredHorse", filteredHorse);
  const dataPhoto = filteredHorse.photo ? filteredHorse.photo : horses.photo;
  const dataName = filteredHorse.name ? filteredHorse.name : horses.name;

  return (
    <View>
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
          <ScrollView style={{ marginTop: 20, marginBottom: 100 }}>
            {filteredHorse.map((data) => {
              console.log("data ====> .>> >> >>> ", data.photo);
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Details", { horse: data })
                  }
                  style={{
                    // backgroundColor: "cyan",
                    paddingHorizontal: 10,
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
                    <Text style={{ fontSize: 14, color: "gray" }}>Нэр</Text>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        width: 200,
                      }}
                    >
                      {data.name}
                    </Text>
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
