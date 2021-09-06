import React, {useState} from "react"
import {Button, Box, Center} from "native-base"
import {ScrollView} from 'react-native';

export default function HabitType() {
  // const [type, setType] = useState("")
  // function HabType(selection){
  //   setType(selection)
  // }
  return (
    <Box>
      <Center>
        <ScrollView horizontal={true}>
          <Button >Physical</Button>
          <Button >Mental</Button>
          <Button >Intake</Button>
        </ScrollView>
      </Center>
    </Box>
  )
}