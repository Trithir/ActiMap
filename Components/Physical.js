import { Center, Container, Button, Box } from 'native-base';
import * as React from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


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
        style= {{
          flex: 1,
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
          <Button size={'sm'}>
            Hike
          </Button>
        Lets get physical!
      </Box>
  )
}