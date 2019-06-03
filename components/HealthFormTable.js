import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

export default class HealthFormTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Name", "School Year","Uploaded By","Uploaded",""],
      tableData: [
        ["HealthForm124414","2018-2019","Irene Willburn","04/22/2019 01:56 AM","View"],
        ["HealthForm124414","2018-2019","Irene Willburn","04/22/2019 01:56 AM","View"],
        
      ]
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table  borderStyle={{borderColor: 'transparent'}}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
            
          />
          <Rows data={state.tableData}  textStyle={styles.text} />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff"},
  head: { height: 40, backgroundColor: "#f1f8ff",backgroundColor:'skyblue' ,justifyContent:"space-between"},
  text: { margin: 10,fontSize:10}
});
