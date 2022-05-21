import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import Horse from "../components/Horse";
import useHorses from "../hooks/useHorses";
import Spinner from "../components/Spinner";
import useGender from "../hooks/useGender";
import Gender from "../components/Gender";

const CategoriesScreen = (props) => {
  const [genders, errorMsg, loading] = useGender(
    // props.data._id,
    // props.searchServerValue,
    props.refresh,
    props.setRefresh
  );

  // const [horses, errorMessage, searchHorse, loading] = useHorses(
  //   props.data._id,
  //   props.searchServerValue,
  //   props.refresh,
  //   props.setRefresh
  // );

  // const filteredHorse = horses.filter(
  //   (el) => el.name.toLowerCase().includes(props.searchLocalValue.toLowerCase()) //toLowerCase() bugdiin jijgeer hmgu haina
  // );
  return (
    <View style={css.genderStyle}>
      <View style={{ marginHorizontal: 30, paddingBottom: 30 }}>
        <Text style={{ flex: 1, fontSize: 16, color: "gray" }}>Морь</Text>
        <Text style={{ flex: 1, fontSize: 25, fontWeight: "bold" }}>
          Ангилал
        </Text>
      </View>

      <FlatList
        style={css.flatListStyle}
        horizontal //horizontal={true} --gsn utgatai
        showsHorizontalScrollIndicator={false}
        data={genders} //
        keyExtractor={(horse) => horse._id} // bugdend n key ugnu
        renderItem={
          (horse) => (
            <Gender
              data={horse.item}
              //navigation={props.navigation}
            />
          )

          // <Text>{horse2.name}</Text>
        } //
      />
    </View>
  );
};

export default CategoriesScreen;

const css = StyleSheet.create({
  genderStyle: {
    // height: 200,
    // backgroundColor: "yellow",
  },
  flatListStyle: {
    // height: 500,
  },
});
