import React, { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { url } from "../../Constants";

const UserContext = React.createContext();

export const UserStore = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const logout = async () => {
    await AsyncStorage.removeItem("user");

    setIsLoggedIn(false);
    setToken(null);
    setEmail(null);
    setUserId(null);
    setUserName(null);
    setUserRole(null);
  };

  const login = (name, password) => {
    axios
      .post(`${url}/userM/login`, { name, password })
      // .post(`http://192.168.1.94:5001/userM/login`, { name, password })
      .then((res) => {
        console.log("---- userContext res data", res.data);
        console.log("---- userContext res data token", res.data.token);
        console.log("---- userContext res data id", res.data.user._id);

        loginUserSuccesful(
          res.data.token,
          email,
          res.data.user.name,
          res.data.user.role,
          res.data.user._id
        );
      })
      .catch((err) => {
        loginFailed(error);
      });
  };

  const signUp = (name, email, password) => {
    axios
      .post(`${url}/userM/register`, {
        name: name,
        email: email,
        password: password,
        role: "user",
      })
      .then((res) => {
        console.log(res.data);

        loginUserSuccesful(res.data.token, email, name, "user", uId);

        // AsyncStorage.setItem("user_token", res.data.token)
        //   .then((res) => {
        //     // navigation.navigate("Login");
        //     console.log("Бүртгэл амжилттай боллоо. token hadgalla signUp");
        //     setIsLoggedIn(true);
        //   })
        //   .catch((err) => {
        //     console.log("token hadgalsangu... : " + err.message);
        //     setError("token hadgalsangu...");
        //   }); // key value,, // promise uchir then catch ta
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        // setError(err.response.data.error.message);
        loginFailed(err.message);
      });
  };

  const loginFailed = (error) => {
    console.log(error); //response - serverees irsen obekt
    setIsLoggedIn(false);
    setEmail(null);
    setUserId(null);
    setUserName(null);
    setUserRole(null);
  };

  const loginUserSuccesful = async (
    token,
    email,
    userName,
    userRole,
    userId
  ) => {
    // console.log()
    setToken(token);
    setEmail(email);
    setUserName(userName);
    setUserRole(userRole);
    setIsLoggedIn(true);
    setUserId(userId);

    // AsyncStorage.setItem("user_token", token)
    //   .then((res) => {
    //     console.log("Amjilttai newterch!!!!, token hadgalla");
    //     setIsLoggedIn(true);
    //     // navigation.navigate("Home");
    //   })
    //   .catch((err) => {
    //     console.log("Login token hadgalsangu... : " + err.message);
    //   }); // key value,, // promise uchir then catch ta

    try {
      await AsyncStorage.setItem(
        "user",
        JSON.stringify({ token, userName, email, userRole, userId }),
        console.log("Login AsyncStorage success")
      );
      // await AsyncStorage.setItem("user_token", token);
      // await AsyncStorage.setItem("user_name", userName);
      // await AsyncStorage.setItem("user_email", email);
      // await AsyncStorage.setItem("user_role", userRole);
    } catch (e) {
      console.log("Hadgalj chadsangui");
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
        login,
        signUp,
        logout,
        userRole,
        setUserRole,
        userName,
        setUserName,
        userId,
        setUserId,
        email,
        setEmail,
        isLoading,
        setIsLoading,
      }}
    >
      {
        props.children //ingej hiisneer MyDrawerNavigation bolon child uud awnaa,, props.children gelgu shuu MyDrawerNavi oruulsan bol zuwhun ter l awna
      }
    </UserContext.Provider>
  );
};

export default UserContext;
