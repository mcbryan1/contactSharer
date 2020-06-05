import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Navigation from "./src/navigation/navigation";
import { Provider } from "react-redux";
import { store, persister } from "./src/Redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <Navigation />
    </PersistGate>
  </Provider>
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
