import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import Horse from "./Horse";
import useHorses from "../hooks/useHorses";
import Spinner from "./Spinner";

const GenderHorsesList = (props) => {
  // props dotroos -- {data, style, searchLocalValue, searchServerValue}
  const [horses, errorMessage, searchHorse, loading] = useHorses(
    props.data._id,
    props.searchServerValue, //haigaad enter darsan utga orj ireh ymuda
    props.refresh,
    props.setRefresh
  ); //shuud searchServerValue damjuulj blno
  //console.log(props.data, " props data *//*-*-*-*-**-");

  // <Button
  //   onPress={() => navigation.navigate("Detail")}
  //   title="test" //navigation ii navigate iig ashiglan Detail ruu userj bnaa //Detail n App.js deer ugsun ner ym
  // />;

  const filteredHorse = horses.filter(
    (el) => el.name.toLowerCase().includes(props.searchLocalValue.toLowerCase()) //toLowerCase() bugdiin jijgeer hmgu haina
  );
  return (
    <View style={[{ ...props.style }]}>
      <Text
        style={{
          marginLeft: 20,
          fontWeight: "bold",
          fontSize: 20,
          marginBottom: 5,
        }}
      >
        {props.data.name} - {filteredHorse.length}
      </Text>
      <Text style={{ marginLeft: 20 }}>{props.data.description}</Text>
      {errorMessage && (
        <Text style={{ marginLeft: 20, color: "red" }}>{errorMessage}</Text>
      )}

      {loading && <Spinner showText={false} />}

      <FlatList
        horizontal //horizontal={true} --gsn utgatai
        showsHorizontalScrollIndicator={false}
        data={filteredHorse} //
        keyExtractor={(horse) => horse._id} // bugdend n key ugnu
        renderItem={
          (horse) => (
            <Horse
              data={horse.item}
              //navigation={props.navigation}
            />
          )

          //<Text>{horse2.name}</Text>
        } //
      />
    </View>
  );
};

export default GenderHorsesList;

const css = StyleSheet.create({});
