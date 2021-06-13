import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from './Components/Map'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Above</Text>
        <MyComponent style={styles.map}/>
      <Text>ALow</Text>
      <StatusBar style="auto" />
    </View>
  );
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
