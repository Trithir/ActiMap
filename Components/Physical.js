import { Center, Button, Box, Stack } from 'native-base';
import * as React from 'react';
import {Dimensions, View, Text, StyleSheet, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HabitModal } from './Modal';

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value)
  } catch (e) {
    // saving error
  }
}

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      console.log(value)
    }
  } catch(e) {
    // error reading value
  }
}

export default function Physical(){

  return (
    <Box 
      bg={{
        linearGradient: {
          colors: ["teal.400", "violet.800"],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      width="100%"
      height="100%"
      rounded="lg"
      _text={{
        fontSize: "md",
        fontWeight: "bold",
        color: "white",
      }}
    >
      <Center>Lets get physical!</Center>
      <ScrollView horizontal={true}>
      <HabitModal/>
      <Button >
        Skip
      </Button>
      <Button  
      onPress={() => {storeData('Completed'), console.log('press')}}
      delayLongPress={() => {getData()}}
      variant={"outline"}>
        Tennis
      </Button>
      <Button >Walk Round</Button>
      <Button >
        Skip
      </Button>
      <Button  variant="outline">
        Tennis
      </Button>
      </ScrollView>
    </Box>
  )
}