

import React, { Component } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
 
export default class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [],
      tableData: [
       
      ]
    }
  }
  
  componentDidMount(){
    this.setState({
      tableHead:this.props.tableHead,
      tableData:this.props.tableData
    })
  }
 
  render() {
    const state = this.state;
    let  message;
    if(this.state.tableData.length === 0 ){
      message = <Text>No Records Found</Text>
    }else{
      message = <Rows data={state.tableData} textStyle={styles.text}/>;
    }
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff',borderColor: "transparent"}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {message}
        </Table>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff"},
  head: { height: 40, backgroundColor: "#f1f8ff",backgroundColor:'skyblue' ,justifyContent:"space-between"},
  text: { margin: 10,fontSize:10}
});
