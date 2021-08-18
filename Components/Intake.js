import { Center, Container } from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

export default function Intake(){

  return (
    <Center>
      <Container bg={{
        linearGradient: {
          colors: ["lightBlue.400", "violet.800"],
          start: [0, 0],
          end: [1, 0],
        },
        }}
        // width="100%"
        // height="5%"
        // p={10}
        rounded="lg"
        _text={{
          fontSize: "md",
          fontWeight: "bold",
          color: "white",
        }}
      >
        The substances we intake make a difference!
      </Container>
    </Center>
  )
}