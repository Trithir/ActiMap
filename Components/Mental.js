import { Center, Box, Button, ChevronRightIcon, ChevronLeftIcon } from 'native-base';
import React, { useState, useEffect } from 'react';
import {ScrollView} from 'react-native';
import { GetMentalHabits, GetAllMentalHabits } from './DataFunctions';
import HabitButton from './HabitButton';
import { NewModalButton } from './Modal/NewModal';

export default function Mental(props){
  const [refreshToken, setrefreshToken] = useState(props.refreshToken)
  const [mentalHabits, setmentalHabits] = useState([])
  const [showAll, setshowAll] = useState(false)

  useEffect(() => {
    if(showAll) {
    GetAllMentalHabits()
    .then(data =>
      setmentalHabits(data))
    }else {
    GetMentalHabits()
    .then(data =>
      setmentalHabits(data))
    };
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
        {mentalHabits.map(habit => <HabitButton key={habit.ID}  ID={habit.ID} Name={habit.Name} Type={habit.Type} Habit_Days={habit.Habit_Days} Note={habit.Note} Creation_Date={habit.Creation_Date} Deleted={habit.Deleted} setrefreshToken={setrefreshToken}/>)}
        <Button colorScheme="green" onPress={() => {setshowAll(!showAll); setrefreshToken(Math.random())}}>
          {showAll ? 
            <ChevronLeftIcon size="18px" color='white'/>
            :
            <ChevronRightIcon size="18px" color='white'/>
          }
        </Button>
      </ScrollView>
    </Box>
  )
}