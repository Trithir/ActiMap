import React, {useState} from "react"
import {FormControl, Select, HStack, Text, Container, CheckIcon, Center, NativeBaseProvider} from "native-base"

export const Frequency = (props) => {
  const [value, setValue] = React.useState("Choose")
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Container><Center>
          <FormControl isRequired isInvalid>
            <Center><FormControl.HelperText mt={1}>Frequency?</FormControl.HelperText></Center>
            <Center><Select
              selectedValue={value}
              minWidth={140}
              accessibilityLabel="Select the Frequency you want to do this habit."
              placeholder={value}
              onValueChange={(itemValue) => {
                setValue(itemValue)
                props.sethabitFrequency(itemValue)
              }}
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />,
              }}
              mt={1}
            >
              <Select.Item label="Daily" value="Every 1 days" />
              <Select.Item label="Skip a day" value="Every 2 days" />
              <Select.Item label="Weekdays" value="Mon-Fri" />
              <Select.Item label="Weekends" value="Sat/Sun" />
              <Select.Item label="Custom" value="Enter number" />
            </Select></Center>
            {/* <FormControl.HelperText mt={1}>
              We'll keep this between us.
            </FormControl.HelperText> */}
            {/* <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage> */}
          </FormControl>

          <HStack mt={3} alignItems="baseline">
            <Text fontSize="md">Frequency: </Text>
            <Text fontSize="md" bold>
              {value}
            </Text>
          </HStack>
          </Center></Container>
      </Center>
    </NativeBaseProvider>
  )
}

// export default () => {
//   return (
//     <NativeBaseProvider>
//       <Center flex={1}>
//         <Frequency />
//       </Center>
//     </NativeBaseProvider>
//   )
// }