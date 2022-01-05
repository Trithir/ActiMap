import { Box, Button } from 'native-base';
import React from 'react';
import RNCalendarEvents from "react-native-calendar-events";


async function checkPermission() {
  // console.log(await RNCalendarEvents.removeEvent('Title Of Event'))

  await RNCalendarEvents.removeEvent('Title Of Event')

  // RNCalendarEvents.saveEvent('Title of event', {
  //   startDate: '2022-01-04T17:34:00.000Z',
  //   endDate: '2022-01-04T17:35:00.000Z'
  // }) 

//  RNCalendarEvents.saveEvent('Title of event', {
//   startDate: '2016-08-19T19:26:00.000Z',
//   endDate: '2017-08-19T19:26:00.000Z'
// })
  // write_calender = await PermissionsAndroid.WRITE_CALENDAR
  // read_calender = await PermissionsAndroid.READ_CALENDAR
  // console.log(write_calender, read_calender,PermissionsAndroid.check(write_calender), PermissionsAndroid.check(read_calender))
  // if (granted === PermissionsAndroid.check(write_calender) && 
  //     granted === PermissionsAndroid.check(read_calender)) {
  //       console.log('You can use the CALENDAR');
  //     } else {
  //       console.log('CALENDAR permission denied');
  //     }
  }

export default function TopBar(){

  return (
      <Box bg={{ linearGradient: {
        colors: ["#ff7160", "#ce2fff"],
        start: [0, 0],
        end: [1, 0],
        }}}
        w="100%"
        height="100%"
        p={0}
        m={0}
        // rounded="lg"
        _text={{
          fontSize: "xs",
          color: "white",
        }}
      >
        <Button onPress={() => {
          checkPermission()}}>Test</Button>
      </Box>
  )
}