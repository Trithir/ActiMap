import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Calen from './Components/Calendar';
import TodoForm from './Components/todoForm';
import TodoList from './Components/todoList';
import { Col, Row, Grid } from "react-native-easy-grid";
import { useOrientation } from './Components/Orientation'; 
import { Box, Center, NativeBaseProvider } from "native-base"


export default function App() {
  const config = {
    dependencies: {
      'linear-gradient': require('expo-linear-gradient').LinearGradient
    }
  }

  console.log(useOrientation())
  return (
    
    useOrientation() == "PORTRAIT" ?
    <NativeBaseProvider config={config}>
    <Grid style={styles.container}>
      <Row size={5}>
      <Center flex={1}>
        <Box bg={{ linearGradient: {
          colors: ["orange.600", "violet.800"],
          start: [0, 0],
          end: [1, 0],
          }}}
          width="100%"
          height="5%"
          p={5}
          rounded="lg"
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Topist of the small boxes
        </Box></Center></Row>
      <Row size={10}><Box bg={{
          linearGradient: {
            colors: ["lightBlue.600", "violet.800"],
            start: [0, 0],
            end: [1, 0],
          },
          }}
          width="100%"
          height="4%"
          p={10}
          rounded="lg"
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Almost top of the small boxes
        </Box></Row>
      <Row size={10}><Box bg={{
          linearGradient: {
            colors: ["lightBlue.500", "violet.800"],
            start: [0, 0],
            end: [1, 0],
          },
          }}
          width="100%"
          height="10%"
          p={10}
          rounded="lg"
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Small Box above bottom small box
        </Box></Row>
      <Row size={10}><Box bg={{
        linearGradient: {
          colors: ["lightBlue.400", "violet.800"],
          start: [0, 0],
          end: [1, 0],
        },
        }}
        width="100%"
        height="12%"
        p={10}
        rounded="lg"
        _text={{
          fontSize: "md",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Bottom small box
      </Box></Row>
      <Row size={50}><Box bg={{
          linearGradient: {
            colors: ["lightBlue.300", "violet.800"],
            start: [0, 0],
            end: [1, 0],
          },
          }}
          width="100%"

          p={10}
          rounded="lg"
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: "white",
          }}
        >
          <Calen/>
        </Box></Row>
    </Grid>
    </NativeBaseProvider>
    :
    <NativeBaseProvider config={config}>
    <Grid style={styles.container}>
      <Col style={styles.col}>
      <Row size={15}><Box bg={{ linearGradient: {
          colors: ["lightBlue.600", "violet.800"],
          start: [0, 0],
          end: [1, 0],
          }}}
          width="100%"
          p={10}
          rounded="lg"
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Topist of the small boxes
        </Box></Row>
      <Row size={10}><Text>{useOrientation()}</Text></Row>
      <Row size={10}><TodoForm/></Row>
      <Row size={12}><Text>ALow</Text></Row>
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
