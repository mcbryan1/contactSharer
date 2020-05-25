import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import QRCode from "react-native-qrcode-svg";
import person from "../assets/images/man1.jpg";
import logo from "../assets/images/logo.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

export default class QRcode extends Component {
  render() {
    let base64Logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..";
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header__top}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Sign in");
            }}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={logo} style={styles.logo} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("UserDetails");
            }}
          >
            <AntDesign name="user" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.text__container}>
          <Text style={styles.text__1}>Exchange Contact Information</Text>
          <Text style={styles.text__2}>
            Scan this QR below to share your contacts.
          </Text>
        </View>
        <View style={styles.qrcode__container}>
          <QRCode
            value="Just some string value"
            logo={{ uri: base64Logo }}
            logoSize={50}
            logoBackgroundColor="transparent"
            color="white"
            backgroundColor="black"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("UserDetails");
          }}
        >
          <View style={styles.contact__container}>
            <Image source={person} style={styles.person__image} />
            <View style={styles.person__details}>
              <Text style={styles.person__details__text1}>
                Leonardo da Vinci
              </Text>
              <Text style={styles.person__details__text2}>Senior Painter</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footer__text1}>
            Want to add a new connection?
          </Text>
          <TouchableOpacity
            style={styles.footer__button}
            onPress={() => {
              navigation.navigate("QRcodeScanner");
            }}
          >
            <Text style={styles.footer__text2}>Scan QR</Text>
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
  logo: {
    height: 35,
    width: 200,
  },
  header__top: {
    marginVertical: 30,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  qrcode__container: {
    alignItems: "center",
  },
  text__1: {
    color: "whitesmoke",
    marginTop: 40,
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 2,
  },
  text__2: {
    color: "grey",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 2,
    marginHorizontal: 30,
    marginBottom: 100,
  },
  text__container: {
    alignItems: "center",
  },
  person__image: {
    width: 40,
    height: 45,
    borderRadius: 50,
    flex: 1,
    marginHorizontal: 20,
  },
  contact__container: {
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "center",
    marginVertical: 70,
    borderBottomWidth: 0.5,
    borderColor: "grey",
    paddingBottom: 100,
  },
  person__details: {
    flexDirection: "column",
    flex: 6,
  },
  person__details__text1: {
    color: "whitesmoke",
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  person__details__text2: {
    color: "grey",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  footer__text1: {
    color: "whitesmoke",
    justifyContent: "center",
    marginTop: 5,
  },
  footer__text2: {
    color: "whitesmoke",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  footer__button: {
    borderWidth: 1,
    borderColor: "#f7027d",
  },
  footer__text2: {
    color: "#f7027d",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});
