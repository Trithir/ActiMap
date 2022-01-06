import React from 'react';
import { StyleSheet} from 'react-native';
import Calen from './Components/Calendar';
import { Col, Row, Grid } from "react-native-easy-grid";
import { NativeBaseProvider} from "native-base"
import Physical from './Components/Physical';
import Mental from './Components/Mental';
import Intake from './Components/Intake';
import TopBar from './Components/TopBar';

export default function App() {
  const config = {
    dependencies: {
      'linear-gradient': require('expo-linear-gradient').LinearGradient
    }
  }

  return (
    <NativeBaseProvider config={config} >
      <Grid style={styles.container}>
        <Row size={3.5}><TopBar/></Row>
        <Row size={13}><Physical/></Row>
        <Row size={13}><Mental/></Row>
        <Row size={13}><Intake/></Row>
        <Row size={55}><Calen/></Row>
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
    backgroundColor: '#ce2fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
