import React, {useState} from "react"
import {Button, Box, Center} from "native-base"
import {ScrollView} from 'react-native';

export default function HabitType(props) {
  const [isPressed, setisPressed] = useState("solid")
  function buttonPress() {
    setisPressed("outline")
  }

  return (
    <Box>
      <Center>
        <ScrollView horizontal={true}>
          <Button onPress={() => {props.sethabitType('P'); buttonPress()}} mr={1} variant={isPressed}>Physical</Button>
          <Button onPress={() => {props.sethabitType('M'); buttonPress()}} mr={1} variant={isPressed}>Mental</Button>
          <Button onPress={() => {props.sethabitType('I'); buttonPress()}} variant={isPressed}>Intake</Button>
        </ScrollView>
      </Center>
    </Box>
  )
}