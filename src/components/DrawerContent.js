import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Caption, Title, Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ion from "react-native-vector-icons/Ionicons";
import UserContext from "../context/userContext";

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
              Naraa
            </Title>
            <Caption style={{ lineHeight: 14 }}>Admin</Caption>
          </View>
        </View>

        <Drawer.Section style={{ marginTop: 15 }}>
          <DrawerItem
            label="Нүүр"
            icon={({ color, size }) => (
              <Icon name="horseshoe" color={color} size={size} />
            )}
          />

          {state.isLoggedIn ? (
            <>
              {state.userRole === "admin" && (
                // <Drawer.Screen name="Шинэ ном нэмэх" component={HomeScreen} />
                <DrawerItem
                  label="Шинэ ном нэмэх"
                  icon={({ color, size }) => (
                    <Icon name="horseshoe" color={color} size={size} />
                  )}
                />
              )}
              <DrawerItem
                label="Тохиргоо"
                icon={({ color, size }) => (
                  <Ion name="settings-outline" color={color} size={size} />
                )}
              />
              <DrawerItem
                label="Гарах"
                icon={({ color, size }) => (
                  <Icon name="logout" color={color} size={size} />
                )}
              />

              {/* <Drawer.Screen
                name="Гарах"
                component={HomeScreen}
                listeners={() => {
                  state.logout();
                }} //event bolgond duudagdana
                options={{
                  title: "Гарах",
                }}
              /> */}
            </>
          ) : (
            <>
              <DrawerItem
                label="Бүртгүүлэх"
                icon={({ color, size }) => (
                  <Icon name="account-plus" color={color} size={size} />
                )}
              />
              <DrawerItem
                label="Нэвтрэх"
                icon={({ color, size }) => (
                  <Icon name="login" color={color} size={size} />
                )}
              />
              {/* <Drawer.Screen
                name="Signup"
                component={SignupScreen}
                options={{
                  title: "Бүртгүүлэх",
                }}
              />
              <Drawer.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  title: "Нэвтрэх",
                }}
              /> */}
            </>
          )}
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
