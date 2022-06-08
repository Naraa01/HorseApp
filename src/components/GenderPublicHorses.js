import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import Horse from "./Horse";
import Spinner from "./Spinner";
import usePublicHorse from "../hooks/usePublicHorse";

const GenderPublicHorses = (props) => {
  const [horses, errorMessage, searchHorse, loading] = usePublicHorse(
    props.data._id,
    props.searchServerValue,
    props.refresh,
    props.setRefresh
  );

  const filteredHorse = horses.filter((el) =>
    el.name.toLowerCase().includes(props.searchLocalValue.toLowerCase())
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
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filteredHorse}
        keyExtractor={(horse) => horse._id}
        renderItem={(horse) => (
          <Horse
            data={horse.item}
            //navigation={props.navigation}
          />
        )}
      />
    </View>
  );
};

export default GenderPublicHorses;

const css = StyleSheet.create({});
