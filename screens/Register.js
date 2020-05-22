import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.add__user}>
          <TouchableOpacity style={styles.overlay__text}>
          <Entypo name="add-user" size={50} color="white" style={styles.overlay__text__text}/>
            <Text style={styles.overlay__text__text}>EDIT PROFILE PHOTO</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: 360,
    height: 220,
    position: "relative",
  },
  
  overlay__text__text: {
    color: "whitesmoke",
    borderColor: "whitesmoke",
    borderWidth: 1,
    alignSelf: "center",
    padding: 5,
  },
});
