import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import {
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native-gesture-handler";
import image from "../assets/images/signup.jpg";

export default class Signin extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View style={styles.input__container}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="someone@example.com"
              placeholderTextColor="#aaaaaa"
              style={styles.input}
              textAlign="right"
            />
          </View>

          <View style={styles.input__container}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="************"
              placeholderTextColor="#aaaaaa"
              style={styles.input}
              textAlign="right"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.button__container}>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate("QRcode");
              }}>
              <Text style={styles.button__text}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.other__links}>
            <TouchableOpacity>
              <Text style={styles.other__links__text1}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={styles.other__links__text2}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    height: 250,
    width: 360,
  },
  overlay__text__text: {
    color: "whitesmoke",
    borderColor: "whitesmoke",
    borderWidth: 1,
    alignSelf: "center",
    padding: 10,
    fontWeight: "bold",
    letterSpacing: 3,
  },
  overlay__text: {
    marginVertical: 0,
    borderBottomWidth: 1,
    borderColor: "whitesmoke",
    paddingBottom: 20,
  },
  input__container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    borderBottomWidth: 0.5,
    borderColor: "grey",
    paddingBottom: 10,
    marginTop: 40,
  },
  input: {
    color: "#f7027d",
    fontSize: 13,
  },
  label: {
    color: "whitesmoke",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  button__text: {
    color: "whitesmoke",
    fontSize: 17,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 90,
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 3,
  },
  button__container: {
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#f7027d",
    marginTop: 20,
    elevation: 10,
  },
  other__links: {
    flexDirection: "row",
    marginVertical: 66.5,
    marginHorizontal: 30,
    justifyContent: "space-between",
  },
  other__links__text1: {
    color: "whitesmoke",
  },
  other__links__text2: {
    color: "whitesmoke",
    borderBottomWidth: 1,
    borderColor: "#f7027d",
  },
});
