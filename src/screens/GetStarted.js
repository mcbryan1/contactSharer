import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import logo from "../assets/images/logo.png";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class GetStarted extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <View>
          <Image source={logo} style={styles.image} />
        </View>
        <View style={styles.contact__text__container}>
          <Text style={styles.contact__text}>Contact Sharer</Text>
        </View>

        <View style={styles.getstarted__text__container}>
          <TouchableOpacity onPress={()=>{navigation.navigate('Home Page')}}>
            <Text style={styles.getstarted__text}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  image: {
    height: 45,
    width: 240,
    marginVertical: 150,
  },
  contact__text__container: {
    alignItems: "center",
    marginBottom: 200,
  },
  contact__text: {
    color: "whitesmoke",
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 4,
  },
  getstarted__text:{
    color: "whitesmoke",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 4,
    borderBottomWidth: 8,
    borderBottomColor: '#f7027d'
  }
});
