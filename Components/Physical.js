import { Center, Container, Button } from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

export default function Physical(){

  return (
    <Center>
      <Container bg={{
        linearGradient: {
          colors: ["teal.400", "violet.800"],
          start: [0, 0],
          end: [1, 0],
        },
        }}
        style= {{
          flex: 1
        }}
        // width="100%"
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
      </Container>
    </Center>
  )
}