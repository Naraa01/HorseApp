import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { url } from "../../Constants";
import { useNavigation } from "@react-navigation/native"; //React context Api ashiglaj hiij bga
import useHorses from "../hooks/useHorses";
import Spinner from "../components/Spinner";

const thousandify = require("thousandify"); //mungun temdegtiin myngatiin orongoor , tawina

const GenderListScreen = (props) => {
  const [horses, errorMessage, searchBook, loading] = useHorses(
    props.route.params.horse._id,
    props.refresh,
    props.setRefresh
  );

  console.log("horses ---> ", horses);
  console.log("props ---> ", props);
  const navigation = useNavigation();

  // const filteredHorse = horses.filter(
  //   (el) => el.name.toLowerCase().includes(props.searchLocalValue.toLowerCase()) //toLowerCase() bugdiin jijgeer hmgu haina
  // );
  return (
    <View>
      {loading ? (
        <Spinner />
      ) : (
        <View>
          <ScrollView>
            {horses.map((data) => {
              console.log("data ====> .>> >> >>> ", data);
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
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
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
