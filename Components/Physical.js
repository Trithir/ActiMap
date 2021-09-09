import { Center, Button, Box, Stack } from 'native-base';
import * as React from 'react';
import {Dimensions, View, Text, StyleSheet, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { HabitModal } from './Modal/Modal';


//If list is all IsPressed, then mark dot

function IsPressed(){
  //toggles variant outline(clicked) or solid(unclicked)
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
      onPress={() => {storeData('Completed')}}
      delayLongPress={() => {getData()}}
      variant={"outline"}>
        Tennis
      </Button>
      <Button variant="solid">Walk Round</Button>
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