import React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function Calen() {
    
    const customStyle = {
      calendarContainer: {
        backgroundColor: 'purple',
      },
      currentDayCircle: {
        backgroundColor: 'orange',
      },
      currentDayText: {
        color: 'blue',
      },
      // color for valid days
      dayButton: {
        backgroundColor: 'gray',
      },
      // color for invalid days
      dayButtonFiller: {
        backgroundColor: 'green',
      },
    }
    return <Calendar customStyle={customStyle} />
    
  // return (
  // <Calendar 
    
  // />
  // );
}