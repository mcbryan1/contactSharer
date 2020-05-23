import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";



export default class Switcher extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("UserDetails");
          }}
        >
          <AntDesign
            name="user"
            size={24}
            color="whitesmoke"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon:{
    marginRight: 10,
    fontWeight: 'bold',
  }
});
