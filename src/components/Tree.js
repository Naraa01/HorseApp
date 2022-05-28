import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { url } from "../../Constants";
import axios from "axios";

const Tree = (props) => {
  const [treeData, setTreeData] = useState(null);
  // 'grid-template-rows: repeat(6, minmax(0, 1fr))'

  console.log("zuw data irjiniu ---->>>", treeData);

  const loadHorse = async () => {
    try {
      const result = await axios.get(
        `${url}/horsesM/${props.horseId}/tree`
        // `http://192.168.1.94:5001//horsesM/${horseId}`
      );
      // const result = await axios.get(`${url}/horsesM/${horseId}`);
      setTreeData(result.data.data);
      // setError(null);
    } catch (err) {
      // setError(err.message);
      console.log("load Horse error ", err.message);
    }
  };

  useEffect(() => {
    loadHorse();
  }, [props.horseId]);

  return (
    <View
      style={
        {
          // backgroundColor: "yellow",
          // gridTemplateRows: repeat(6, minmax(0, "1fr")),
        }
      }
    >
      <View style={css.bigView}>
        <View style={css.colBig}>
          {/* etseg, eh */}
          <View style={css.allSmallView}>
            <Text>{treeData?.fatherId?.name}</Text>
          </View>
          <View style={css.allSmallView}>
            <Text>{treeData?.motherId?.name}</Text>
          </View>
        </View>
        {/* etseg, ehiin --> etseg eh */}
        <View style={css.colBig}>
          <View style={css.allSmallView}>
            {/* etsgiin etseg */}
            <Text>{treeData?.fatherId?.fatherId?.name}</Text>
          </View>
          <View style={css.allSmallView}>
            {/* etsgiin eh */}
            <Text>{treeData?.fatherId?.motherId?.name}</Text>
          </View>
          <View style={css.allSmallView}>
            {/* ehiin etseg */}
            <Text>{treeData?.motherId?.fatherId?.name}</Text>
          </View>
          <View style={css.allSmallView}>
            {/* ehiin eh */}
            <Text>{treeData?.motherId?.motherId?.name}</Text>
          </View>
        </View>
        <View style={css.colBig}>
          <View style={css.allSmallView}>
            <Text>{treeData?.fatherId?.fatherId?.fatherId?.name}</Text>
          </View>
          <View style={css.allSmallView}>
            <Text>{treeData?.fatherId?.fatherId?.motherId?.name}</Text>
          </View>
          <View style={css.allSmallView}>
            <Text>{treeData?.fatherId?.motherId?.fatherId?.name}</Text>
          </View>
          <View style={css.allSmallView}>
            <Text>{treeData?.fatherId?.motherId?.motherId?.name}</Text>
          </View>
          <View style={css.allSmallView}>
            <Text>{treeData?.motherId?.fatherId?.fatherId?.name}</Text>
          </View>
          <View style={css.allSmallView}>
            <Text>{treeData?.motherId?.fatherId?.motherId?.name}</Text>
          </View>
          <View style={css.allSmallView}>
            <Text>{treeData?.motherId?.motherId?.fatherId?.name}</Text>
          </View>
          <View style={css.allSmallView}>
            <Text>{treeData?.motherId?.motherId?.motherId?.name}</Text>
          </View>
        </View>
        {/* etseg, ehiin --> etseg ehiin --> etseg eh */}
        <View style={css.colBig}>
          <View style={css.allSmallView}>
            <Text>
              {treeData?.fatherId?.fatherId?.fatherId?.fatherId?.name}
            </Text>
          </View>
          <View style={css.allSmallView}>
            <Text>
              {treeData?.fatherId?.fatherId?.fatherId?.motherId?.name}
            </Text>
          </View>
          <View style={css.allSmallView}>
            <Text>
              {treeData?.fatherId?.fatherId?.motherId?.fatherId?.name}
            </Text>
          </View>
          <View style={css.allSmallView}>
            <Text>
              {treeData?.fatherId?.fatherId?.motherId?.motherId?.name}
            </Text>
          </View>
          <View style={css.allSmallView}>
            <Text>
              {treeData?.fatherId?.motherId?.fatherId?.fatherId?.name}
            </Text>
          </View>
          <View style={css.allSmallView}>
            <Text>
              {treeData?.fatherId?.motherId?.fatherId?.motherId?.name}
            </Text>
          </View>
          <View style={css.allSmallView}>
            <Text>
              {treeData?.fatherId?.motherId?.motherId?.fatherId?.name}
            </Text>
          </View>
          <View style={css.allSmallView}>
            <Text>
              {treeData?.fatherId?.motherId?.motherId?.motherId?.name}
            </Text>
          </View>
          <View style={css.allSmallView}>
            <Text>
              {treeData?.motherId?.fatherId?.fatherId?.fatherId?.name}
            </Text>
          </View>
          <View style={css.allSmallView}>
            <Text>
              {treeData?.motherId?.fatherId?.fatherId?.motherId?.name}
            </Text>
          </View>
          <View style={css.allSmallView}>
            <Text>
              {treeData?.motherId?.fatherId?.motherId?.fatherId?.name}
            </Text>
          </View>
          <View style={css.allSmallView}>
            <Text>
              {treeData?.motherId?.fatherId?.motherId?.motherId?.name}
            </Text>
          </View>
          <View style={css.allSmallView}>
            <Text>
              {treeData?.motherId?.motherId?.fatherId?.fatherId?.name}
            </Text>
          </View>
          <View style={css.allSmallView}>
            <Text style={css.allText}>
              {treeData?.motherId?.motherId?.fatherId?.motherId?.name}
            </Text>
          </View>
          <View style={css.allSmallView}>
            <Text style={css.allText}>
              {treeData?.motherId?.motherId?.motherId?.fatherId?.name}
            </Text>
          </View>
          <View style={css.allSmallView}>
            <Text style={css.allText}>
              {treeData?.motherId?.motherId?.motherId?.motherId?.name}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Tree;

const css = StyleSheet.create({
  bigView: { flex: 1, flexDirection: "row", height: "auto" },
  colBig: {
    marginVertical: 20,
    flex: 1,
    // backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  allSmallView: {
    flex: 1,
    marginVertical: 1,
    // paddingHorizontal: 30,
    // backgroundColor: "red",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#DEDCDC",
  },
  allText: {
    // borderBottomWidth: 2,
    // borderBottomColor: "black",
  },
});
