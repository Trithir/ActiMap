import { Center, Container, Button, Box, Stack } from 'native-base';
import * as React from 'react';
import {Dimensions, View, Text, StyleSheet, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        // style= {{
        //   flex: 1,
        // }}
        width="100%"
        height="100%"
        rounded="lg"
        _text={{
          fontSize: "md",
          fontWeight: "bold",
          color: "white",
        }}
        >
          {/* <Button size={'sm'}>
            Mike
          </Button>
          <Button size={'sm'}>
          Jump Jacks
        </Button> */}
          <Center>Lets get physical!</Center>
            <ScrollView horizontal={true}>
            <Button >Walk Round</Button>
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
          {/* <Stack
            direction={{
              base: "row",
              md: "column",
            }}
            space={2}
            style={{overflow:'scroll'}}
            alignItems={{
              base: "center",
              md: "flex-start",
            }}
          >
            <Button >Walk Round</Button>
            <Button >
              Skip
            </Button>
            <Button  variant="outline">
              Tennis
            </Button>
            <Button >Walk Round</Button>
            <Button >
              Skip
            </Button>
            <Button  variant="outline">
              Tennis
            </Button>
          </Stack> */}
      </Box>
  )
}