import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calen from './Components/Calendar';
import TodoForm from './Components/todoForm';
import TodoList from './Components/todoList';
// import { Col, Row, Grid } from "react-native-grid-layout";
// import { NativeBaseProvider, Box } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default function App() {
  return (
    <Grid style={styles.container}>
      <Row size={15}></Row>
      <Row size={10}><Text>Emotional</Text></Row>
      <Row size={10}><TodoForm/></Row>
      <Row size={12}><Text>ALow</Text></Row>
      <Row size={50}><Calen/></Row>
    </Grid>
    );
    // <View style={styles.container}>

      {/* <Grid>
        <Row size={1}><Text>Emotional</Text></Row>
        <Row size={1}> <TodoForm /></Row>
        <Row size={1}> <Text>ALow</Text></Row>
        <Row size={3}> <Calen /></Row>
      </Grid> */}

      {/* <StatusBar style="auto" />
      <Text>Emotional</Text>
      <TodoForm />
      <Text>ALow</Text>
      <Calen /> */}
      {/* <TodoList /> */}  
      {/* <MyComponent style={styles.map}/> */}
    // </View>
  
}

const styles = StyleSheet.create({
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
