import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "../screen/GetStarted";
import HomePage from "../screen/HomePage";
import Signin from "../screen/Signin";
import Register from "../screen/Register";
import QRcode from "../screen/QRcode";
import { TouchableOpacity } from "react-native-gesture-handler";
import logo from "../assets/images/logo.png";
import QRcodeScanner from "../screen/QRcodeScanner";
import UserDetails from "../screen/UserDetails";
import Switcher from "../components/Switcher";
import OtherUserDetails from "../screen/OtherUserDetails";
import { connect } from "react-redux";

const Stack = createStackNavigator();

function Navigation({auth}) {
  return (
    <NavigationContainer style={styles.container}>
    {auth.login ? (
      <Stack.Navigator initialRouteName={GetStarted}>
        <Stack.Screen
          options={{
            headerTitle: null,
            headerStyle: { height: 0 },
          }}
          name="QRcode"
          component={QRcode}
        />
        <Stack.Screen name="QRcodeScanner" component={QRcodeScanner} />
        <Stack.Screen
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
              letterSpacing: 1,
            },
            headerTitleAlign: "center",
            headerTintColor: "whitesmoke",
            headerStyle: {
              backgroundColor: "#f7027d",
              height: 100,
            },
            title: "My Profile",
          }}
          name="UserDetails"
          component={UserDetails}
        />
        <Stack.Screen
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
              letterSpacing: 1,
            },
            headerTitleAlign: "center",
            headerTintColor: "whitesmoke",
            headerStyle: {
              backgroundColor: "#f7027d",
              height: 100,
            },
            title: "Member Profile",
          }}
          name="OtherUserDetails"
          component={OtherUserDetails}
        />
        </Stack.Navigator>
        ) : (
          <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitle: null,
            headerStyle: { height: 0 },
          }}
          name="Get Started"
          component={GetStarted}
        />
        <Stack.Screen
          options={{
            headerTitle: null,
            headerStyle: { height: 0 },
          }}
          name="Home Page"
          component={HomePage}
        />
        <Stack.Screen
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              letterSpacing: 4,
            },
            headerTitleAlign: "center",
            headerTintColor: "whitesmoke",
            headerStyle: {
              backgroundColor: "#f7027d",
              height: 100,
            },
            title: "Register",
          }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              letterSpacing: 4,
            },
            headerTitleAlign: "center",
            headerTintColor: "whitesmoke",
            headerStyle: {
              backgroundColor: "#f7027d",
              height: 100,
            },
            title: "Sign In",
          }}
          name="Sign in"
          component={Signin}
        />
      </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 25,
    width: 150,
  },
});

const mapStateToProp = (state) => {
  return { auth: state };
};
export default connect(mapStateToProp)(Navigation);