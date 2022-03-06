import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import Book from "./Book";
import useBooks from "../hooks/useBooks";
import Spinner from "./Spinner";

const CategoryBookList = (props) => {
  // props dotroos -- {data, style, searchLocalValue, searchServerValue}
  const [books, errorMessage, searchBook, loading] = useBooks(
    props.data._id,
    props.searchServerValue //haigaad enter darsan utga orj ireh ymuda
  ); //shuud searchServerValue damjuulj blno
  // console.log(props.data);

  /* <Button
            onPress={() => navigation.navigate("Detail")}
            title="test" //navigation ii navigate iig ashiglan Detail ruu userj bnaa //Detail n App.js deer ugsun ner ym
          /> */

  const filteredBook = books.filter(
    (el) => el.name.toLowerCase().includes(props.searchLocalValue.toLowerCase()) //toLowerCase() bugdiin jijgeer hmgu haina
  );
  return (
    <View style={[{ ...props.style }]}>
      {/* <Text>aaaa</Text> */}
      <Text
        style={{
          marginLeft: 20,
          fontWeight: "bold",
          fontSize: 20,
          marginBottom: 5,
        }}
      >
        {props.data.name} - {filteredBook.length}
      </Text>
      <Text style={{ marginLeft: 20 }}>{props.data.description}</Text>
      {errorMessage && (
        <Text style={{ marginLeft: 20, color: "red" }}>{errorMessage}</Text>
      )}
      {/* {books.map((el) => (
        <Text key={el.name}>{el.name}</Text>
      ))} */}

      {loading && <Spinner showText={false} />}

      <FlatList
        horizontal //horizontal={true} --gsn utgatai
        showsHorizontalScrollIndicator={false}
        data={filteredBook} //
        keyExtractor={(book1) => book1.name} // bugdend n key ugnu
        renderItem={
          (book2) => (
            <Book
              data3={book2.item}
              //navigation={props.navigation}
            />
          )

          //<Text>{book2.name}</Text>
        } //
      />
    </View>
  );
};

export default CategoryBookList;

const css = StyleSheet.create({});
