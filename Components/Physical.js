import { Center, Box, Button } from 'native-base';
import React, { useState, useEffect } from 'react';
import {ScrollView} from 'react-native';
import { GetAllPhysicalHabits, GetPhysicalHabits } from './DataFunctions';
import HabitButton from './HabitButton';
import { NewModalButton } from './Modal/NewModal';

export default function Physical(props){
  const [refreshToken, setrefreshToken] = useState(props.refreshToken)
  const [physicalHabits, setphysicalHabits] = useState([])
  const [showAll, setshowAll] = useState(false)
    useEffect(() => {
      if(showAll) {
      GetAllPhysicalHabits()
      .then(data =>
        setphysicalHabits(data))
      }else {
      GetPhysicalHabits()
      .then(data =>
        setphysicalHabits(data))
      };
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
        <NewModalButton setrefreshToken={setrefreshToken} Type={'P'}/>
        {physicalHabits.map(habit => <HabitButton key={habit.ID}  ID={habit.ID} Name={habit.Name} Type={habit.Type} Habit_Days={habit.Habit_Days} Note={habit.Note} Creation_Date={habit.Creation_Date} Deleted={habit.Deleted} setrefreshToken={setrefreshToken}/>)} 
        <Button variant={showAll ? "outline" :"solid"} onPress={() => {setshowAll(!showAll), setrefreshToken(Math.random())}}>All</Button>
      </ScrollView>
    </Box>
  )
}