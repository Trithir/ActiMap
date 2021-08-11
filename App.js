import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Calen from './Components/Calendar';
import TodoForm from './Components/todoForm';
import TodoList from './Components/todoList';
// import { Col, Row, Grid } from "react-native-grid-layout";
// import { NativeBaseProvider, Box } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

// export default class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//         OrientationStatus : '',
//         Height_Layout : '',
//         Width_Layout : '',
//     }
//   }
//   componentDidMount(){
//     this.DetectOrientation();
//   }
//   DetectOrientation(){
//     console.log(this.state.Width_Layout,this.state.Height_Layout)
//     if(this.state.Width_Layout > this.state.Height_Layout)
//     {
//       // Write Your own code here, which you want to execute on Landscape Mode.

//       this.setState({
//         OrientationStatus : 'Landscape'
//         });
//     }
//     else{

//         this.setState({
//         OrientationStatus : 'Portrait'
//         });
//     }
//   }

//   render() {
//     return (
//       <View style={styles.MainContainer} onLayout={(event) => this.setState({
//         Width_Layout : event.nativeEvent.layout.width,
//         Height_Layout : event.nativeEvent.layout.height
//       }, ()=> this.DetectOrientation())}>
      
//       {this.state.OrientationStatus == "Landscape" ? console.log("landscape") 
//       :
//       <Grid style={styles.container}>
//         <Row size={15}></Row>
//         <Row size={10}><Text>Emotional</Text></Row>
//         <Row size={10}><TodoForm/></Row>
//         <Row size={12}><Text>ALow</Text></Row>
//         <Row size={50}><Calen/></Row>
//       </Grid>
//       }

//       </View>
//   );
//   }
// }

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10
//   },
//   TextStyle :{
//     fontSize : 20,
//     color : '#000'
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     width: 100,
//     height: 75,
//   }
// });



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
    <View style={styles.container}>

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
    </View>
  
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
