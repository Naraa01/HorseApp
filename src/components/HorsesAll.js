import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import useHorseAll from "../hooks/useHorseAll";
import Spinner from "./Spinner";
import { url } from "../../Constants";
import { useNavigation } from "@react-navigation/native";

const HorsesAll = (props) => {
  const [horses, errorMessage, searchBook, loading] = useHorseAll();
  const navigation = useNavigation();

  return (
    <View>
      {loading ? (
        <Spinner />
      ) : (
        <View>
          <ScrollView>
            {horses.map((data) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Details", { horse: data })
                  }
                  style={{
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

export default HorsesAll;

const styles = StyleSheet.create({});
