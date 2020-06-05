import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native-gesture-handler";
import { connect } from "react-redux";
import { registrationForm, registerError } from "../Redux/Actions/authActions";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      number: "",
      password: "",
      confirm: "",
      role: "",
      linkedIn: "",
      twitter: "",
    };
  }

  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = () => {
    if (this.state.password !== this.state.confirm) {
      this.props.registerError("Error (Password Mismatch)");
      return;
    }
    this.props.registrationForm(this.state.email, this.state.password);
  };
  render() {
    const { auth } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.add__user}>
            <TouchableOpacity style={styles.overlay__text}>
              <Entypo
                name="add-user"
                size={50}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.overlay__text__text}>ADD PROFILE PHOTO</Text>
            </TouchableOpacity>
          </View>
          {auth.error.register && (
            <Text style={{ color: "red" }}>{auth.error.register}</Text>
          )}
          <View style={styles.input__container}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              placeholder="Eg. John Doe"
              placeholderTextColor="#aaaaaa"
              style={styles.input}
              textAlign="right"
              onChangeText={(text) => {
                this.handleUpdateState("name", text);
              }}
              value={this.state.fullname}
            />
          </View>

          <View style={styles.input__container}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="someone@example.com"
              placeholderTextColor="#aaaaaa"
              style={styles.input}
              textAlign="right"
              onChangeText={(text) => {
                this.handleUpdateState("email", text);
              }}
              value={this.state.email}
            />
          </View>

          <View style={styles.input__container}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              placeholder="+233000000000"
              placeholderTextColor="#aaaaaa"
              style={styles.input}
              textAlign="right"
              onChangeText={(text) => {
                this.handleUpdateState("number", text);
              }}
              value={this.state.number}
            />
          </View>

          <View style={styles.input__container}>
            <Text style={styles.label}>Role</Text>
            <TextInput
              placeholder="Senior Developer"
              placeholderTextColor="#aaaaaa"
              style={styles.input}
              textAlign="right"
              onChangeText={(text) => {
                this.handleUpdateState("role", text);
              }}
              value={this.state.role}
            />
          </View>

          <View style={styles.input__container}>
            <Text style={styles.label}>Twitter</Text>
            <TextInput
              placeholder="@username"
              placeholderTextColor="#aaaaaa"
              style={styles.input}
              textAlign="right"
              onChangeText={(text) => {
                this.handleUpdateState("twitter", text);
              }}
              value={this.state.twitter}
            />
          </View>

          <View style={styles.input__container}>
            <Text style={styles.label}>LinkedIn</Text>
            <TextInput
              placeholder="/username"
              placeholderTextColor="#aaaaaa"
              style={styles.input}
              textAlign="right"
              onChangeText={(text) => {
                this.handleUpdateState("linkedIn", text);
              }}
              value={this.state.linkedIn}
            />
          </View>
          <View style={styles.input__container}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholderTextColor="#aaaaaa"
              placeholder="Password"
              style={styles.input}
              textAlign="right"
              secureTextEntry={true}
              onChangeText={(text) => {
                this.handleUpdateState("password", text);
              }}
              value={this.state.password}
            />
          </View>
          <View style={styles.input__container}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              placeholderTextColor="#aaaaaa"
              placeholder="Repeat Password"
              style={styles.input}
              textAlign="right"
              secureTextEntry={true}
              onChangeText={(text) => {
                this.handleUpdateState("confirm", text);
              }}
              value={this.state.confirm}
            />
          </View>
          <View style={styles.button__container}>
            <TouchableOpacity
              onPress={this.handleOnSubmit}
              style={styles.button}
            >
              <Text style={styles.button__text}>Register</Text>
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
    paddingBottom: 15,
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
    marginTop: 10,
  },
  button: {
    backgroundColor: "#f7027d",
    marginBottom: 42,
    elevation: 10,
  },
});

const mapStateToProp = (state) => {
  return { auth: state };
};
export default connect(mapStateToProp, { registrationForm, registerError })(
  Register
);
