import { Box, Button } from 'native-base';
import React from 'react';
import RNCalendarEvents from "react-native-calendar-events";

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
          console.log(RNCalendarEvents)
          RNCalendarEvents.requestPermissions()}}>Test</Button>
      </Box>
  )
}