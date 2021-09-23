import React, {useState} from "react"
import { Box, Center} from "native-base"
import {ScrollView} from 'react-native';
import DayButton from "./DayButton";

export default function WeekdaySelector(props) {
  const [refreshToken, setrefreshToken] = useState(props.refreshToken)
  let dayList = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

  return (
    <Box pt={4}>
      <Center>
        <ScrollView horizontal={true}>
          {dayList.map(day => <DayButton key={day} day={day} habitDays={props.habitDays} sethabitDays={props.sethabitDays} setrefreshToken={setrefreshToken}>{day}</DayButton>)}
        </ScrollView>
      </Center>
    </Box>
  )
}