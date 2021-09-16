import { Center, Box, Button } from 'native-base';
import React, { useState, useEffect } from 'react';
import {ScrollView} from 'react-native';
import { GetIntakeHabits } from './DataFunctions';
import { HabitModal } from './Modal/Modal';

export default function Intake(){
  const [intakeHabits, setintakeHabits] = useState([])
    useEffect(() => {
      GetIntakeHabits()
        .then(data =>
        setintakeHabits(data)
      );
     }, [])

  return (
    <Box 
      bg={{
        linearGradient: {
          colors: ["#c8ff13", "#ce2fff"],
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
        {intakeHabits.map(habit => <Button key={habit.ID}>{habit.Name}</Button>)}
      </ScrollView>
    </Box>
  )
}