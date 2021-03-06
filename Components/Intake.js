import { Center, Box, Button, ChevronRightIcon, ChevronLeftIcon } from 'native-base';
import React, { useState, useEffect } from 'react';
import {ScrollView} from 'react-native';
import { GetIntakeHabits, GetAllIntakeHabits } from './DataFunctions';
import { NewModalButton } from './Modal/NewModal';
import HabitButton from './HabitButton';

export default function Intake(props){
  const [refreshToken, setrefreshToken] = useState(props.refreshToken)
  const [intakeHabits, setintakeHabits] = useState([])
  const [showAll, setshowAll] = useState(false)

  useEffect(() => {
    if(showAll) {
    GetAllIntakeHabits()
    .then(data =>
      setintakeHabits(data))
    }else {
    GetIntakeHabits()
    .then(data =>
      setintakeHabits(data))
    };
  }, [refreshToken])

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
      <Center>What we intake makes a difference!</Center>
      <ScrollView horizontal={true}>
        <NewModalButton setrefreshToken={setrefreshToken} Type={'I'}/>
        {intakeHabits.map(habit => <HabitButton key={habit.ID}  ID={habit.ID} Name={habit.Name} Type={habit.Type} Habit_Days={habit.Habit_Days} Note={habit.Note} Creation_Date={habit.Creation_Date} Deleted={habit.Deleted} setrefreshToken={setrefreshToken}/>)}
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