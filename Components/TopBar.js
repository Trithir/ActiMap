import { Center, Container } from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

export default function TopBar(){

  return (
    <Center>
      <Container bg={{ linearGradient: {
        colors: ["orange.600", "violet.800"],
        start: [0, 0],
        end: [1, 0],
        }}}
        // width="100%"
        // height="5%"
        // p={5}
        rounded="lg"
        _text={{
          fontSize: "md",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Notification Bar filler?
      </Container>
    </Center>
  )
}