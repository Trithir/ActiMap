import React, {useState} from "react"
import {Button, Box, Center} from "native-base"
import {ScrollView} from 'react-native';

export default function HabitType(props) {
  const [pressedP, setpressedP] = useState("solid")
  const [pressedM, setpressedM] = useState("solid")
  const [pressedI, setpressedI] = useState("solid")
  function pPress() {
    setpressedP("outline")
    setpressedM("solid")
    setpressedI("solid")
  }
  function mPress() {
    setpressedM("outline")
    setpressedP("solid")
    setpressedI("solid")
  }
  function iPress() {
    setpressedI("outline")
    setpressedP("solid")
    setpressedM("solid")
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