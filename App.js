import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Calen from './Components/Calendar';
import TodoForm from './Components/todoForm';
import TodoList from './Components/todoList';
import { Col, Row, Grid } from "react-native-easy-grid";
import { useOrientation } from './Components/Orientation'; 
import { Box, Center, NativeBaseProvider, Container } from "native-base"
import Physical from './Components/Physical';
import Mental from './Components/Mental';
import Intake from './Components/Intake';
import TopBar from './Components/TopBar';
import {Dimensions} from 'react-native';

export default function App() {
  const config = {
    dependencies: {
      'linear-gradient': require('expo-linear-gradient').LinearGradient
    }
  }

    let high = Dimensions.get('window').height
    let wide = Dimensions.get('window').width
  
    console.log(high, wide)
  return (
    
    useOrientation() == "PORTRAIT" ?
    <NativeBaseProvider config={config} >
      {/* <ViewBoxesWithColorAndText/> */}
        <Grid style={styles.container}>
          <Row size={3.5}><TopBar/></Row>
          <Row size={13}><Physical/></Row>
          <Row size={13}><Mental/></Row>
          <Row size={13}><Intake/></Row>
          <Row size={50}><Calen/></Row>
          </Grid>
    </NativeBaseProvider>
    :
    <NativeBaseProvider config={config}>
      <Grid style={styles.container}>
        <Col style={styles.col}>
          <Row size={33}><Physical/></Row>
          <Row size={33}><Mental/></Row>
          <Row size={33}><Intake/></Row>
        </Col>
        <Col><Row size={50}><Calen/></Row></Col>
      </Grid>
    </NativeBaseProvider>
    );

}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});
