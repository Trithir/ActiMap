import { Center, Box } from 'native-base';
import React from 'react';
import {ScrollView} from 'react-native';
import { HabitModal } from './Modal/Modal';

export default function Intake(){

  return (
      <Box 
      bg={{
        linearGradient: {
          colors: ["green.400", "violet.800"],
          start: [0, 0],
          end: [1, 0],
        },
        }}
        width="100%"
        height="100%"
        rounded="lg"
        _text={{
          fontSize: "md",
          color: "white",
        }}
      >
        <Center>The substances we intake make a difference!</Center>
        <ScrollView horizontal={true}>
            <HabitModal />
        </ScrollView>
      </Box>
  )
}