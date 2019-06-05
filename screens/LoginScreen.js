import React, { Component } from "react";
import { Keyboard,
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    Alert,
    KeyboardAvoidingView,StyleSheet,Button } from "react-native";

export default class LoginScreen extends Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>EduHealth</Text>
              <TextInput
                placeholder="Username"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                name="username"
                //onChangeText={ this.handleChange}
              />
              <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
                name="password"
                // onChangeText={this.handleChange}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() =>this.props.navigation.navigate("Profile")}
                title="Login"
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.props.navigation.navigate("Register")}
                title="Register"
              />
              
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1
      },
      loginScreenContainer: {
        flex: 1
      },
      logoText: {
        fontSize: 25,
        fontWeight: "800",
        marginTop: 150,
        marginBottom: 30,
        textAlign: "center"
      },
      loginFormView: {
        flex: 1
      },
      loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#eaeaea",
        backgroundColor: "#fafafa",
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5
      },
      loginButton: {
        backgroundColor: "#3897f1",
        borderRadius: 5,
        height: 45,
        marginTop: 10
      },
      fbLoginButton: {
        height: 45,
        marginTop: 10,
        backgroundColor: "transparent"
      }
})
