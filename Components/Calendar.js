import { Center, Container,Text, View, Box } from 'native-base';
import React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Dimensions} from 'react-native';

export default function Calen() {
    
    const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key: 'workout', color: 'green', selectedDotColor: 'blue'};
    let deviceWidth = Dimensions.get('window').width
    
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
          <Calendar 
          // onDayPress={(day) => {console.log('selected day', day)}}
          // onDayLongPress={(day) => {console.log('selected day', day)}}
          markingType={'multi-dot'}
          markedDates={{ 
            '2021-08-10': {dots: [massage, vacation, workout]},
            '2021-08-08': {dots: [massage, vacation, workout]},
            '2021-08-09': {dots: [massage, workout]}
          }}
          theme={{
            calendarBackground: '#601685',
            todayTextColor: '#00adf5',
            indicatorColor: 'blue',
          }}
          />
        </Box>
    )
}