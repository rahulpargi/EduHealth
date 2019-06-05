import React, { Component } from 'react'
import {
    Keyboard,
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    Alert,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Button
  } from "react-native";


export default class RegisterScreen extends Component{
    state = {
        displayName:'',
        nickName:'',
        email:'',
        password:'',
        confirmPassword:''
      };
    render(){
        return(
            <ScrollView>
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
             
                <View style={styles.loginScreenContainer}>
                  
                  <View style={styles.loginFormView}>
                    <Text style={styles.logoText}>EduHealth Parent Registration  Form</Text>
                    <Text style={{fontSize:10,textAlign:'center'}}>Dear Parents .Make available all the features for you by registering in the EduHealth System. Please ignore if you have already registered. </Text>
                    <TextInput
                      placeholder="Display Name"
                      placeholderColor="#c4c3cb"
                      style={styles.loginFormTextInput}
                      name="displayName"
                      //onChangeText={ this.handleChange}
                    />
                    <TextInput
                      placeholder="Nick Name"
                      placeholderColor="#c4c3cb"
                      style={styles.loginFormTextInput}
                      name="nickName"
                      //onChangeText={ this.handleChange}
                    />
                    <TextInput
                      placeholder="Email"
                      placeholderColor="#c4c3cb"
                      style={styles.loginFormTextInput}
                      name="email"
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
                    <TextInput
                      placeholder="Confirm Password"
                      placeholderColor="#c4c3cb"
                      style={styles.loginFormTextInput}
                      secureTextEntry={true}
                      name="confirmPassword"
                     // onChangeText={this.handleChange}
                    />
                    
                    <Button
                      buttonStyle={styles.loginButton}
                      onPress={() => this.props.navigation.navigate('Login')}
                      title="Register"
                    />
                  </View>
                </View>
              
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
      },
      loginScreenContainer: {
        flex: 1,
      },
      logoText: {
        fontSize: 25,
        fontWeight: "800",
        marginTop: 150,
        marginBottom: 30,
        textAlign: 'center',
      },
      loginFormView: {
        flex: 1
      },
      loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
      
      },
      loginButton: {
        backgroundColor: '#3897f1',
        borderRadius: 5,
        height: 45,
        marginTop: 15,
      },
      fbLoginButton: {
        height: 45,
        marginTop: 10,
        backgroundColor: 'transparent',
      },
})