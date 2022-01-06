import { Box, Button, Slider, Center } from 'native-base';
import React, {useState} from 'react';

import { SliderModalButton } from './Slider/SliderButton';

export default function TopBar(){
  
  return (
      <Box bg={{ linearGradient: {
        colors: ["#ff7160", "#ce2fff"],
        start: [0, 0],
        end: [1, 0],
        }}}
        w="100%"
        height="100%"
        p={0}
        m={0}
        // rounded="lg"
        _text={{
          fontSize: "xs",
          color: "white",
        }}
      > 
        <Center>
          <SliderModalButton />
        </Center>
      </Box>
  )
}