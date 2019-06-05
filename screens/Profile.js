import React, { Component } from "react";
import { Text, StyleSheet, Platform, ScrollView, View } from "react-native";
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
  H3,
  Dimensions
} from "native-base";
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
  SafeAreaView
} from "react-navigation";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Font } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import DataTable from "../components/DataTable";

export default class Profile extends Component {
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
  static navigationOptions = { header: null };

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container style={{ backgroundColor: "#dcdcdc" }}>
        <Header>
          <Left>
            <Button transparent onPress={() => openDrawer()}>
              <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()} />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <Content style={{ margin: 10 }}>
            <Grid>
              <Row style={styles.avatarContainer}>
                <Thumbnail
                  circular
                  large
                  source={{
                    uri:
                      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                  }}
                />
              </Row>
              <Row style={{ justifyContent: "center", alignItems: "center" }}>
                <H3 style={{ color: "rgba(0,0,0,0.5)" }}>Sara Evans</H3>
              </Row>
              <Row
                style={{
                  justifyContent: "flex-end",
                  alignItems: "center"
                }}
              >
                <Icon type="FontAwesome" name="edit" />
              </Row>
              <ListItem
                itemDivider
                style={{
                  justifyContent: "center",
                  marginTop: 10,
                  height: 70
                }}
              >
                <H2>Student Information</H2>
              </ListItem>

              <Row style={styles.cardContainer}>
                <Card style={styles.card}>
                  <CardItem header bordered>
                    <Text>Student Number</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>3420</Text>
                    </Body>
                  </CardItem>
                </Card>
                <Card style={styles.card}>
                  <CardItem header bordered>
                    <Text>Graduation Year</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>2017</Text>
                    </Body>
                  </CardItem>
                </Card>
                <Card style={styles.card}>
                  <CardItem header bordered>
                    <Text>Grade</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>3</Text>
                    </Body>
                  </CardItem>
                </Card>
                <Card style={styles.card}>
                  <CardItem header bordered>
                    <Text>DOB</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>12/11/2012</Text>
                    </Body>
                  </CardItem>
                </Card>
                <Card style={styles.card}>
                  <CardItem header bordered>
                    <Text>School Name</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>Baltz Elementary School</Text>
                    </Body>
                  </CardItem>
                </Card>
                <Card style={styles.card}>
                  <CardItem header bordered>
                    <Text>Gender</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>Male</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Row>
              <ListItem
                itemDivider
                style={{ justifyContent: "center", height: 70 }}
              >
                <H2>Student Health</H2>
              </ListItem>
              <Row>
                <DataTable
                  tableHead={
                    ["Condition", "Notes"]
                  }
                  tableData={
                    [
                      ["Physician","Albert Hall"],
                      ["Dentist"],
                      ["Diabetes"],
                      ["Benadryl"],
                      ["Ashtma"],
                      ["Allergies"],
                      ["Surgery"]
                      ["Pnuemonia"],
                      ["Sutures Stitches"],
                      ["Hospitaliation"]

                    ]
                }
                />
              </Row>
            </Grid>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    height: 120,
    textAlign: "center",
    justifyContent: "center",
    padding: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 3
  },
  cardContainer: {
    flex: 1,

    height: 350,
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 20
  },
  card: {
    height: 100,
    width: 150,

    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 3
  }
});
