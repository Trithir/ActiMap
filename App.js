import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Calen from './Components/Calendar';
import TodoForm from './Components/todoForm';
import TodoList from './Components/todoList';
import { Col, Row, Grid } from "react-native-easy-grid";
import { useOrientation } from './Components/Orientation'; 



export default function App() {

  console.log(useOrientation())
  return (
    
    useOrientation() == "PORTRAIT" ?
    <Grid style={styles.container}>
      <Row size={15}><Text></Text></Row>
      <Row size={10}><Text>{useOrientation()}</Text></Row>
      <Row size={10}><TodoForm/></Row>
      <Row size={12}><Text>ALow</Text></Row>
      <Row size={50}><Calen/></Row>
    </Grid>
    :
    <Grid style={styles.container}>
      <Col style={styles.col}>
      <Row size={15}><Text></Text></Row>
      <Row size={10}><Text>{useOrientation()}</Text></Row>
      <Row size={10}><TodoForm/></Row>
      <Row size={12}><Text>ALow</Text></Row>
      </Col>
      <Col><Row size={50}><Calen/></Row></Col>
    </Grid>
    );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  TextStyle :{
    fontSize : 20,
    color : '#000'
  },
  col: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: 100,
    height: 75,
  }
});
