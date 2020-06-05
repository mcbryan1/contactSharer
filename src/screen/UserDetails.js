import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import person from "../assets/images/man1.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default class UserDetails extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.contact__container}>
          <Image source={person} style={styles.person__image} />
          <View style={styles.person__details}>
            <Text style={styles.person__details__text1}>Leonardo da Vinci</Text>
            <Text style={styles.person__details__text2}>Senior Painter</Text>
          </View>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome
              name="facebook"
              size={24}
              color="#000"
              style={styles.iconia1}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <AntDesign
              name="twitter"
              size={24}
              color="#000"
              style={styles.iconia}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Zocial
              name="instagram"
              size={20}
              color="#000"
              style={styles.iconia3}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.main__details}>
          <View style={styles.main__details__section}>
            <Feather name="phone" size={20} color="white" />
            <Text style={styles.main__details__text}>+39 (548) 585 499</Text>
          </View>
        </View>
        <View style={styles.main__details}>
          <View style={styles.main__details__section}>
            <MaterialIcons name="email" size={20} color="white" />
            <Text style={styles.main__details__text}>davinci@demons.com</Text>
          </View>
        </View>
        <View style={styles.main__details}>
          <View style={styles.main__details__section}>
            <Entypo name="location-pin" size={20} color="white" />
            <Text style={styles.main__details__text}>Rome, Italy</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    tag:{
        alignSelf: 'center',
        marginTop: 150
    },
  main__details__section: {
    flexDirection: "row",
  },
  main__details__text: {
    color: "whitesmoke",
    marginLeft: 30,
  },
  main__details: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
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
  icons: {
    flexDirection: "row",
    marginHorizontal: 30,
  },
  icon: {
    backgroundColor: "#fff",
    marginRight: 15,
    borderRadius: 50,
    elevation: 50,
  },
  iconia: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  iconia1: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  iconia3: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
