import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer,createDrawerNavigator } from "react-navigation";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/Profile";
import HealthFormScreen from "./screens/HealthForm";
import MedicalAuth from "./screens/MedicalAuth";
import TreatmentAuth from "./screens/TreatmentAuth";
import MedicationTracking from "./screens/MedicationTracking";
import TreatmentTracking from "./screens/TreatmentTracking";
import Screenings from "./screens/Screenings";
import ChartVisit from "./screens/ChartVisit";
import Immunizations from "./screens/Immunizations";
import HealthHistory from "./screens/HealthHistory";
import MedicalHistory from "./screens/MedicalHistory";



import { Font } from "expo";
import { Ionicons } from "@expo/vector-icons";



export default class App extends React.Component {
  render() {
    
    return <AppContainer />;
  }
}
const AppDrawerNavigator = createDrawerNavigator({
  Profile:{
    screen:ProfileScreen,
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
      
    }
  },
  MedicalAuthorization:{
    screen: MedicalAuth,
    
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      header: null
    }

  },
  Treatment:{
    screen:TreatmentAuth,
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      header: null
    }

  },
  Medication:{
    screen:MedicationTracking,
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      header: null
    }
  },
  TreatmentTrack:{
    screen:TreatmentTracking,
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      header: null
    }
  },
  Screening:{
    screen:Screenings,
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      header: null
    }
  },
  Chart:{
    screen:ChartVisit,
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      header: null
    } 
  },
  Immunization:{
    screen:Immunizations,
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      header: null
    }
  },
  Medical:{
    screen:MedicalHistory,
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      header: null
    }
  },
  HealthHist:{
    screen:HealthHistory,
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      header: null
    }
  }
  
})

const AppNavigator = createStackNavigator(
  {
    
    
    Login:{
      screen:LoginScreen,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        
      }
    },
    Register:{
      screen:RegisterScreen,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        
      }
    },
    Profile:{
      screen:AppDrawerNavigator,
      headerMode: "none",
        navigationOptions: {
          headerVisible: false,
          header: null
        }
    },
    Health: {
      screen: AppDrawerNavigator,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        header: null
        
      }
    },
    MedicalAuthorization:{
      screen: AppDrawerNavigator,
      
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        header: null
      }
  
    },
    Treatment:{
      screen:AppDrawerNavigator,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        header: null
      }
  
    },
    Medication:{
      screen:AppDrawerNavigator,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        header: null
      }
    },
    TreatmentTrack:{
      screen:AppDrawerNavigator,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        header: null
      }
    },
    Screening:{
      screen:AppDrawerNavigator,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        header: null
      }
    },
    Chart:{
      screen:AppDrawerNavigator,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        header: null
      } 
    },
    Immunization:{
      screen:AppDrawerNavigator,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        header: null
      }
    },
    Medical:{
      screen:AppDrawerNavigator,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        header: null
      }
    },
    HealthHist:{
      screen:AppDrawerNavigator,
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

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

// export default createAppContainer(AppNavigator);
