import { Center, Box, Button } from 'native-base';
import React, { useState, useEffect } from 'react';
import {ScrollView} from 'react-native';
import { GetMentalHabits } from './DataFunctions';
import { HabitModal } from './Modal/Modal';

export default function Mental(){
  const [mentalHabits, setmentalHabits] = useState([])
    useEffect(() => {
      GetMentalHabits()
        .then(data =>
        setmentalHabits(data)
      );
     }, [])

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
          <ScrollView horizontal={true}>
            <HabitModal />
            {mentalHabits.map(habit => <Button key={habit.ID}>{habit.Name}</Button>)}
          </ScrollView>
        </Box>
  )
}