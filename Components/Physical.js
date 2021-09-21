import { Center, Box } from 'native-base';
import React, { useState, useEffect } from 'react';
import {ScrollView} from 'react-native';
import { GetPhysicalHabits } from './DataFunctions';
import HabitButton from './HabitButton';
import { HabitModal } from './Modal/Modal';

export default function Physical(props){
  const [refreshToken, setrefreshToken] = useState(props.refreshToken)
  const [physicalHabits, setphysicalHabits] = useState([])
    useEffect(() => {
      GetPhysicalHabits()
        .then(data =>
        setphysicalHabits(data)
      );
    }, [refreshToken])
  
  return (
    <Box 
      bg={{
        linearGradient: {
          colors: ["#ff7160", "#ce2fff"],
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
      <Center>Lets get physical!</Center>
      <ScrollView horizontal={true}>
        <HabitModal setrefreshToken={setrefreshToken}/>
        {physicalHabits.map(habit => <HabitButton key={habit.ID}  ID={habit.ID} Name={habit.Name}/>)} 
      </ScrollView>
    </Box>
  )
}