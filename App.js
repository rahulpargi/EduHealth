import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ProfileScreen from "./screens/Profile";
import HealthFormScreen from "./screens/HealthForm";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";
import ChartVisit from "./screens/ChartVisit";
import HealthHistory from "./screens/HealthHistory";
import Immunizations from "./screens/Immunizations";
import MedicalAuth from "./screens/MedicalAuth";
import MedicationTracking from "./screens/MedicationTracking";
import RegisterScreen from "./screens/RegisterScreen";
import Screenings from "./screens/Screenings";
import TreatmentAuth from "./screens/TreatmentAuth";
import TreatmentTracking from "./screens/TreatmentTracking";
import LoginScreen from "./screens/LoginScreen";
import { Font } from "expo";
import { Ionicons } from "@expo/vector-icons";


class App extends React.Component {
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <RootStack />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: ProfileScreen,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false
      }
    },
    Health: {
      screen: HealthFormScreen,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        header: null
      }
    },
    Login:{
      screen:LoginScreen,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        header: null
      }
    },
    Register:{
      screen:RegisterScreen,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        header: null
      }
    }
  },

  {
    initialRouteName: "Login"
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default createAppContainer(AppNavigator);
