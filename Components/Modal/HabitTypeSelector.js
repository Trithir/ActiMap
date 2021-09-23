import React, {useState} from "react"
import {Button, Box, Center} from "native-base"
import {ScrollView} from 'react-native';

export default function HabitType(props) {
  const [pressedP, setpressedP] = useState(props.Type == 'P' ? "outline" : "solid")
  const [pressedM, setpressedM] = useState(props.Type == 'M' ? "outline" : "solid")
  const [pressedI, setpressedI] = useState(props.Type == 'I' ? "outline" : "solid")
  function pPress() {
    setpressedP("outline")
    setpressedM("solid")
    setpressedI("solid")
  }
  function mPress() {
    setpressedP("solid")
    setpressedM("outline")
    setpressedI("solid")
  }
  function iPress() {
    setpressedP("solid")
    setpressedM("solid")
    setpressedI("outline")
  }

  return (
    <Box>
      <Center>
        <ScrollView horizontal={true}>
          <Button onPress={() => {props.sethabitType('P'); pPress()}} mr={1} variant={pressedP}>Physical</Button>
          <Button onPress={() => {props.sethabitType('M'); mPress()}} mr={1} variant={pressedM}>Mental</Button>
          <Button onPress={() => {props.sethabitType('I'); iPress()}} variant={pressedI}>Intake</Button>
        </ScrollView>
      </Center>
    </Box>
  )
}