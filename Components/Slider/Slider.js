import React from "react"
import { Slider, Box, Center, NativeBaseProvider, Text } from "native-base"

export const SliderThing = (props) => {

  return (
    <Box mx="5" width="80%">
      <Slider
        defaultValue={1}
        minValue={1}
        maxValue={4}
        accessibilityLabel="Reminder Time Setter"
        size='lg'
        step={1}
        onChange={(v) => {
          props.setOnChangeValue(Math.floor(v))
        }}
      >
        <Slider.Track>
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
      <Text textAlign="center">{props.onChangeValue}</Text>
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
