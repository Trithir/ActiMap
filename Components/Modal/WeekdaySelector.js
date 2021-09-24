import React, {useState} from "react"
import { Box, Center, HStack} from "native-base"
import {ScrollView} from 'react-native';
import DayButton from "./DayButton";

export default function WeekdaySelector(props) {
  const [refreshToken, setrefreshToken] = useState(props.refreshToken)
  let topList = ['Sun','Mon','Tue','Wed']
  let bottomList = ['Thu','Fri','Sat']

  return (
    <Box pt={4}>
      <Center flex={1}>
        <HStack space={1}>
          {topList.map(day => <DayButton key={day} day={day} habitDays={props.habitDays} sethabitDays={props.sethabitDays} setrefreshToken={setrefreshToken}>{day}</DayButton>)}
        </HStack >
        <HStack space={1} mt={1}>
          {bottomList.map(day => <DayButton key={day} day={day} habitDays={props.habitDays} sethabitDays={props.sethabitDays} setrefreshToken={setrefreshToken}>{day}</DayButton>)}
        </HStack >
      </Center>
    </Box>
  )
}