import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { mainColor, url } from "../../Constants";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Tree = (props) => {
  const [treeData, setTreeData] = useState(null);
  const navigation = useNavigation();

  const loadHorse = async () => {
    try {
      const result = await axios.get(
        `${url}/horsesM/${props.horseId}/tree`
        // `${url}/horsesM/${props.horseId}/treelast`
        // `http://192.168.1.94:5001//horsesM/${horseId}`
      );
      setTreeData(result.data.data);
    } catch (err) {
      console.log("load Horse error ", err.message);
    }
  };

  useEffect(() => {
    loadHorse();
  }, [props.horseId]);

  return (
    <View style={css.bigView}>
      <View style={css.colBig}>
        {/* etseg, eh */}
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", { horse: treeData?.fatherId });
            }}
          >
            <Text style={css.allText}>{treeData?.fatherId?.name}</Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", { horse: treeData?.motherId });
            }}
          >
            <Text style={css.allText}>{treeData?.motherId?.name}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* etseg, ehiin --> etseg eh */}
      <View style={css.colBig}>
        <View style={css.allSmallView}>
          {/* etsgiin etseg */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.fatherId?.fatherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.fatherId?.fatherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          {/* etsgiin eh */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.fatherId?.motherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.fatherId?.motherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          {/* ehiin etseg */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.motherId?.fatherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.motherId?.fatherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          {/* ehiin eh */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.motherId?.motherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.motherId?.motherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={css.colBig}>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.fatherId?.fatherId.fatherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.fatherId?.fatherId?.fatherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.fatherId?.fatherId.motherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.fatherId?.fatherId?.motherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.fatherId?.motherId.fatherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.fatherId?.motherId?.fatherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.fatherId?.motherId.motherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.fatherId?.motherId?.motherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.motherId?.fatherId.fatherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.motherId?.fatherId?.fatherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.motherId?.fatherId.motherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.motherId?.fatherId?.motherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.motherId?.motherId.fatherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.motherId?.motherId?.fatherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.motherId?.motherId.motherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.motherId?.motherId?.motherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* etseg, ehiin --> etseg ehiin --> etseg eh */}
      <View style={css.colBig}>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.fatherId?.fatherId?.fatherId?.fatherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.fatherId?.fatherId?.fatherId?.fatherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.fatherId?.fatherId?.fatherId?.motherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.fatherId?.fatherId?.fatherId?.motherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.fatherId?.fatherId?.motherId?.fatherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.fatherId?.fatherId?.motherId?.fatherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.fatherId?.fatherId?.motherId?.motherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.fatherId?.fatherId?.motherId?.motherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.fatherId?.motherId?.fatherId?.fatherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.fatherId?.motherId?.fatherId?.fatherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.fatherId?.motherId?.fatherId?.motherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.fatherId?.motherId?.fatherId?.motherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.fatherId?.motherId?.motherId?.fatherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.fatherId?.motherId?.motherId?.fatherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.fatherId?.motherId?.motherId?.motherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.fatherId?.motherId?.motherId?.motherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.motherId?.fatherId?.fatherId?.fatherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.motherId?.fatherId?.fatherId?.fatherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.motherId?.fatherId?.fatherId?.motherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.motherId?.fatherId?.fatherId?.motherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.motherId?.fatherId?.motherId?.fatherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.motherId?.fatherId?.motherId?.fatherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.motherId?.fatherId?.motherId?.motherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.motherId?.fatherId?.motherId?.motherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.motherId?.motherId?.fatherId?.fatherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.motherId?.motherId?.fatherId?.fatherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.motherId?.motherId?.fatherId?.motherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.motherId?.motherId?.fatherId?.motherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.motherId?.motherId?.motherId?.fatherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.motherId?.motherId?.motherId?.fatherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={css.allSmallView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                horse: treeData?.motherId?.motherId?.motherId?.motherId,
              });
            }}
          >
            <Text style={css.allText}>
              {treeData?.motherId?.motherId?.motherId?.motherId?.name}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Tree;

const css = StyleSheet.create({
  bigView: {
    flex: 1,
    flexDirection: "row",
    height: "auto",
    // backgroundColor: "yellow",
    marginTop: 10,
    marginHorizontal: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 18,
    // borderColor: "#B1B1B1",
    borderColor: mainColor,
  },
  colBig: {
    marginVertical: 20,
    flex: 1,
    // backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  allSmallView: {
    flex: 1,
    padding: 2,
    marginVertical: 1,
    // paddingHorizontal: 30,
    // backgroundColor: "red",
    justifyContent: "center",
    // borderBottomWidth: 1,
    // borderBottomColor: "#DEDCDC",
  },
  allText: {
    borderBottomWidth: 1,
    borderBottomColor: "#DEDCDC",
  },
});
