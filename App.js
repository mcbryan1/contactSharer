import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "./screens/GetStarted";
import HomePage from "./screens/HomePage";
import Signin from "./screens/Signin";
import Register from "./screens/Register";

const Stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName={GetStarted}>
          <Stack.Screen
            options={{
              headerTitle: null,
              headerStyle: { height: 0 },
            }}
            name="Get Started"
            component={GetStarted}
          />
          <Stack.Screen name="Home Page" component={HomePage} />
          <Stack.Screen name="Sign in" component={Signin} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
