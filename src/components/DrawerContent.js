import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Caption, Title, Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ion from "react-native-vector-icons/Ionicons";
import UserContext from "../context/userContext";
import Footer from "./Footer";

const DrawerContent = (props) => {
  const state = useContext(UserContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flexDirection: "row", paddingLeft: 20, marginTop: 15 }}>
          <Avatar.Image
            source={require("../../assets/img/horse0308.webp")}
            size={50}
          />
          <View style={{ marginLeft: 15 }}>
            <Title
              style={{
                fontSize: 16,
                marginTop: 3,
                fontWeight: "bold",
                lineHeight: 20,
              }}
            >
              {state.userName ? state.userName : "Удам угсаа"}
            </Title>
            <Caption style={{ lineHeight: 14 }}>
              {state.userRole ? state.userRole : "Тавтай морил"}
            </Caption>
          </View>
        </View>

        <Drawer.Section style={{ marginTop: 15 }}>
          <DrawerItem
            label="Нүүр"
            onPress={() => props.navigation.navigate("Home")}
            icon={({ color, size }) => (
              <Icon name="horseshoe" color={color} size={size} />
            )}
          />

          {state.isLoggedIn ? (
            <>
              {state.userRole === "admin" && (
                <DrawerItem
                  label="Шинэ морь нэмэх"
                  onPress={() => props.navigation.navigate("Шинэ морь нэмэх")}
                  icon={({ color, size }) => (
                    <Icon name="horseshoe" color={color} size={size} />
                  )}
                />
              )}
              <DrawerItem
                label="Тохиргоо"
                onPress={() => props.navigation.navigate("Тохиргоо")}
                icon={({ color, size }) => (
                  <Ion name="settings-outline" color={color} size={size} />
                )}
              />
              <DrawerItem
                style={{ borderTopColor: "#f4f4f4", borderTopWidth: 1 }}
                label="Гарах"
                onPress={() => state.logout()}
                icon={({ color, size }) => (
                  <Icon name="logout" color={color} size={size} />
                )}
              />
            </>
          ) : (
            <>
              <DrawerItem
                label="Бүртгүүлэх"
                onPress={() => props.navigation.navigate("Signup")}
                icon={({ color, size }) => (
                  <Icon name="account-plus" color={color} size={size} />
                )}
              />
              <DrawerItem
                label="Нэвтрэх"
                onPress={() => props.navigation.navigate("Login")}
                icon={({ color, size }) => (
                  <Icon name="login" color={color} size={size} />
                )}
              />
            </>
          )}
        </Drawer.Section>
      </DrawerContentScrollView>
      <Footer />
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
