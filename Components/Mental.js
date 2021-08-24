import { Center, Container, Box } from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

export default function Mental(){

  return (
      <Box bg={{
          linearGradient: {
            colors: ["yellow.400", "violet.800"],
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
          <Center>The mind is a powerful Drug!</Center>
        </Box>
  )
}