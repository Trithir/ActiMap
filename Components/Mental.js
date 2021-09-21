import { Center, Box } from 'native-base';
import React, { useState, useEffect } from 'react';
import {ScrollView} from 'react-native';
import { GetMentalHabits } from './DataFunctions';
import { HabitModal } from './Modal/Modal';
import HabitButton from './HabitButton';

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
        colors: ["#4bfffb", "#ce2fff"],
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
        {mentalHabits.map(habit => <HabitButton key={habit.ID}  ID={habit.ID} Name={habit.Name}/>)}
      </ScrollView>
    </Box>
  )
}