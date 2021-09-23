import { Center, Box } from 'native-base';
import React, { useState, useEffect } from 'react';
import {ScrollView} from 'react-native';
import { GetMentalHabits } from './DataFunctions';
import HabitButton from './HabitButton';
import { NewModalButton } from './Modal/NewModal';


export default function Mental(props){
  const [refreshToken, setrefreshToken] = useState(props.refreshToken)
  const [mentalHabits, setmentalHabits] = useState([])
    useEffect(() => {
      GetMentalHabits()
        .then(data =>
        setmentalHabits(data)
      );
     }, [refreshToken])

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
        <NewModalButton setrefreshToken={setrefreshToken} Type={'M'}/>
        {mentalHabits.map(habit => <HabitButton key={habit.ID}  ID={habit.ID} Name={habit.Name} Type={habit.Type} Frequency={habit.Frequency} Note={habit.Note} Creation_Date={habit.Creation_Date} Deleted={habit.Deleted} setrefreshToken={setrefreshToken}/>)}
      </ScrollView>
    </Box>
  )
}