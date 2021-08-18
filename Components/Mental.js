import { Center, Container } from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

export default function Mental(){

  return (
    <Center>
      <Container bg={{
          linearGradient: {
            colors: ["yellow.400", "violet.800"],
            start: [0, 0],
            end: [1, 0],
          },
          }}
          width="100%"
          height="100%"
          // p={10}
          rounded="lg"
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: "white",
          }}
        >
          The mind is a powerful Drug!
        </Container>
    </Center>
  )
}