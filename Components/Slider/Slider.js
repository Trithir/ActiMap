import React from "react"
import { Slider, Box, Center, NativeBaseProvider } from "native-base"

export const SliderThing = () => {
  return (
    <Box mx="5" width="80%">
      <Slider
        defaultValue={1}
        minValue={1}
        maxValue={4}
        accessibilityLabel="Reminder Time Setter"
        step={1}
      >
        <Slider.Track>
          
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
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
