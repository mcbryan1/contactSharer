import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";

export default class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.add__user}>
          <TouchableOpacity style={styles.overlay__text}>
            <Entypo
              name="add-user"
              size={100}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.overlay__text__text}>ADD PROFILE PHOTO</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.input__container}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            placeholder="Eg. John Doe"
            placeholderTextColor="#aaaaaa"
            style={styles.input}
            textAlign="right"
          />
        </View>

        <View style={styles.input__container}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Eg. some0ne@example.com"
            placeholderTextColor="#aaaaaa"
            style={styles.input}
            textAlign="right"
          />
        </View>

        <View style={styles.input__container}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            placeholder="Eg. +233000000000"
            placeholderTextColor="#aaaaaa"
            style={styles.input}
            textAlign="right"
          />
        </View>

        <View style={styles.input__container}>
          <Text style={styles.label}>Role</Text>
          <TextInput
            placeholder="Eg. Senior Developer"
            placeholderTextColor="#aaaaaa"
            style={styles.input}
            textAlign="right"
          />
        </View>

        <View style={styles.input__container}>
          <Text style={styles.label}>Twitter</Text>
          <TextInput
            placeholder="Eg. @username"
            placeholderTextColor="#aaaaaa"
            style={styles.input}
            textAlign="right"
          />
        </View>

        <View style={styles.input__container}>
          <Text style={styles.label}>LinkedIn</Text>
          <TextInput
            placeholder="Eg. /username"
            placeholderTextColor="#aaaaaa"
            style={styles.input}
            textAlign="right"
          />
        </View>

        <View style={styles.button__container}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button__text}>Register</Text>
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
  icon: {
    alignSelf: "center",
    marginBottom: 20,
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
    marginTop: 20,
  },
  input: {
    color: "#f7027d",
    fontSize: 15,
  },
  label: {
    color: "whitesmoke",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  button__text: {
    color: "whitesmoke",
    fontSize: 17,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 90,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  button__container: {
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#f7027d",
    elevation: 10,
  },
});
