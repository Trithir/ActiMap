import { Center, Container } from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

export default function Physical(){

  return (
    <Center>
      <Container bg={{
        linearGradient: {
          colors: ["lightBlue.600", "violet.800"],
          start: [0, 0],
          end: [1, 0],
        },
        }}
        width="100%"
        // height="4%"
        // p={10}
        rounded="lg"
        _text={{
          fontSize: "md",
          fontWeight: "bold",
          color: "white",
        }}
        >
        Lets get physical!
      </Container>
    </Center>
  )
}