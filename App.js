import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Navigation from "./src/navigation/navigation";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import GetStarted from "./src/screens/GetStarted";
// import HomePage from "./src/screens/HomePage";
// import Signin from "./src/screens/Signin";
// import Register from "./src/screens/Register";
// import QRcode from "./src/screens/QRcode";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import logo from "./src/assets/images/logo.png";
// import QRcodeScanner from "./src/screens/QRcodeScanner";
// import UserDetails from "./src/screens/UserDetails";
// import Switcher from "./src/components/Switcher";
// import OtherUserDetails from './src/screens/OtherUserDetails'

export default function App() {
  return (
      <Navigation />
    // <NavigationContainer style={styles.container}>
    //   <Stack.Navigator initialRouteName={GetStarted}>
    //     <Stack.Screen
    //       options={{
    //         headerTitle: null,
    //         headerStyle: { height: 0 },
    //       }}
    //       name="Get Started"
    //       component={GetStarted}
    //     />
    //     <Stack.Screen
    //       options={{
    //         headerTitle: null,
    //         headerStyle: { height: 0 },
    //       }}
    //       name="Home Page"
    //       component={HomePage}
    //     />
    //     <Stack.Screen
    //       options={{
    //         headerTitleStyle: {
    //           fontWeight: "bold",
    //           fontSize: 25,
    //           letterSpacing: 4,
    //         },
    //         headerTitleAlign: "center",
    //         headerTintColor: "whitesmoke",
    //         headerStyle: {
    //           backgroundColor: "#f7027d",
    //           height: 100,
    //         },
    //         title: "Register",
    //       }}
    //       name="Register"
    //       component={Register}
    //     />
    //     <Stack.Screen
    //       options={{
    //         headerTitleStyle: {
    //           fontWeight: "bold",
    //           fontSize: 25,
    //           letterSpacing: 4,
    //         },
    //         headerTitleAlign: "center",
    //         headerTintColor: "whitesmoke",
    //         headerStyle: {
    //           backgroundColor: "#f7027d",
    //           height: 100,
    //         },
    //         title: "Sign In",
    //       }}
    //       name="Sign in"
    //       component={Signin}
    //     />
    //     <Stack.Screen
    //      options={{
    //         headerTitle: null,
    //         headerStyle: { height: 0 },
    //       }}
    //       name="QRcode"
    //       component={QRcode}
    //     />
    //     <Stack.Screen name="QRcodeScanner" component={QRcodeScanner} />
    //     <Stack.Screen
    //       options={{
    //         headerTitleStyle: {
    //           fontWeight: "bold",
    //           fontSize: 20,
    //           letterSpacing: 1,
    //         },
    //         headerTitleAlign: "center",
    //         headerTintColor: "whitesmoke",
    //         headerStyle: {
    //           backgroundColor: "#f7027d",
    //           height: 100,
    //         },
    //         title: "My Profile",
    //       }}
    //       name="UserDetails"
    //       component={UserDetails}
    //     />
    //     <Stack.Screen
    //       options={{
    //         headerTitleStyle: {
    //           fontWeight: "bold",
    //           fontSize: 20,
    //           letterSpacing: 1,
    //         },
    //         headerTitleAlign: "center",
    //         headerTintColor: "whitesmoke",
    //         headerStyle: {
    //           backgroundColor: "#f7027d",
    //           height: 100,
    //         },
    //         title: "Member Profile",
    //       }}
    //       name="OtherUserDetails"
    //       component={OtherUserDetails}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // image: {
  //   height: 25,
  //   width: 150,
  // },
});
