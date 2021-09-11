import { Box } from 'native-base';
import React, { useEffect, useState } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { ConvertCalendarData } from './DataFunctions';

export default function Calen() {
    const [calendarData, setcalendarData] = useState({})
    useEffect(() => {
      ConvertCalendarData()
      .then(data =>
        setcalendarData(data)
      );
     }, [])
    return (
        <Box style={{
          linearGradient: {
            colors: ["lightBlue.300", "violet.800"],
            start: [0, 0],
            end: [1, 0],
          },
          }}
          width="100%"
          rounded="lg"
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            
          }}
        >
          <CalendarList 
          onDayPress={(day) => {console.log('selected day', day)}}
          onDayLongPress={(day) => {console.log('selected day', day, 'long')}}
          markingType={'multi-dot'}
          markedDates={ calendarData }
          minDate={'2021-08-01'}
          horizontal={true}
          theme={{
            calendarBackground: '#601685',
            todayTextColor: '#00adf5',
            indicatorColor: 'blue',
          }}
          />
        </Box>
    )
}