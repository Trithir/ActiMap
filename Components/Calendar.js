import { Box } from 'native-base';
import React, { useEffect, useState } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { ConvertCalendarData } from './DataFunctions';

export default function Calen(props) {
  const [calendarData, setcalendarData] = useState({})
  const [refreshToken, setrefreshToken] = useState(props.refreshToken)
  useEffect(() => {
    let isMounted = true;
    ConvertCalendarData(setrefreshToken)
    .then(data => {
      if (isMounted) 
      setcalendarData(data)
    });
    return () => { isMounted = false };
  }, [refreshToken])

  return (
    <Box 
      style={{
        linearGradient: {
          colors: ["lightBlue.300", "violet.800"],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      width="100%"
      height='100%'
      rounded="lg"
      // _text={{
      //   fontSize: "md",
      //   fontWeight: "bold",
      // }}
    >
      <Calendar
      onDayPress={(day) => {console.log('selected day', day)}}
      onDayLongPress={(day) => {console.log('selected day', day, 'long')}}
      markingType={'multi-dot'}
      markedDates={ calendarData }
      minDate={'2021-08-01'}
      horizontal={true}
      enableSwipeMonths={true}
      theme={{
        calendarBackground: '#ce2fff',
        todayTextColor: '#FF5310',
        indicatorColor: 'blue',
        dayTextColor: '#f7f7f7',
        monthTextColor: '#f7f7f7',
        textDisabledColor: '#21233d',
      }}
      />
    </Box>
  )
}