import React, { Component } from "react";

import { Text, View, StyleSheet, ScrollView } from "react-native";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Thumbnail,
  Card,
  CardItem,
  Content,
  ListItem,
  H2,
  H3
} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";
import { Font } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import DataTable from "../components/DataTable";

export default class ChartVisits extends Component {
  constructor(props) {
    super(props);
    this.state = { isReady: false };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
            </Button>
          </Left>
          <Body>
            <Title>Treatment Tracking</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <Content>
            <Row style={styles.headerText}>
              <H2>Scoliosis Screenings</H2>
            </Row>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "skyblue",
                width: 400
              }}
            />

            <Row>
              <DataTable
                tableHead={[
                  "Office Visit Type",
                  "Issue Visit Reason",
                  "Provider Name",
                  "Time In",
                  "Time Out",
                  "Contact With Parent",
                  "Visit Outcome",
                  "Action"
                ]}
                tableData={
                  [
                    ["","Stomach Ache","Irene Wilburn","04/21/2019 09:01 PM","04/21/2019 09:07 PM","No","Send To Class","View"]
                  ]
                }
              />
            </Row>
            <Row style={styles.headerText}>
              <H2>Vision Screenings</H2>
            </Row>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "skyblue",
                width: 400
              }}
            />

            
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    flex: 1,
    justifyContent: "center",
    marginTop: 20
  },
  table: {
    flex: 1,
    margin: 10,
    padding: 10,
    justifyContent: "space-around",
    backgroundColor: "skyblue"
  },
  textSize: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "flex-start",

    fontSize: 10,
    justifyContent: "space-around",
    backgroundColor: "red"
  }
});
