import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from './Components/Map'
import TodoForm from './Components/todoForm';
import TodoList from './Components/todoList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Emotional</Text>
      <TodoList />
      <TodoForm />
        {/* <MyComponent style={styles.map}/> */}
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
