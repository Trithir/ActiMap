import React, {useState} from "react"
import {Button, Box, Center} from "native-base"
import {ScrollView} from 'react-native';

export default function HabitType(props) {

  // const [type, setType] = useState("")
  // function HabType(selection){
  //   setType(selection)
  // }
  return (
    <Box>
      <Center>
        <ScrollView horizontal={true}>
          <Button onPress={() => props.sethabitType('P')}>Physical</Button>
          <Button onPress={() => props.sethabitType('M')}>Mental</Button>
          <Button onPress={() => props.sethabitType('I')}>Intake</Button>
        </ScrollView>
      </Center>
    </Box>
  )
}