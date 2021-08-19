import { Center, Container, Box } from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

export default function TopBar(){

  return (
      <Box bg={{ linearGradient: {
        colors: ["orange.600", "violet.800"],
        start: [0, 0],
        end: [1, 0],
        }}}
        w="100%"
        height="100%"
        p={0}
        m={0}
        rounded="lg"
        _text={{
          fontSize: "xs",
          color: "white",
        }}
      > HIDEMEPLEASEEEEEEEEEEEEEEE
      </Box>
  )
}