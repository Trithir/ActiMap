import React, { useState } from 'react';
import { Button } from 'native-base';

export default function DayButton(props){
  const [completed, setcompleted] = useState(props.habitDays.indexOf(props.day) != -1) //check completed for current day

  function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
      return ele != value; 
    });
  }

  return (
      <Button variant={completed ? "outline" :"solid"} onPress={() => {
        if(completed) props.sethabitDays(arrayRemove(props.habitDays, props.day))  
        else props.sethabitDays(props.habitDays.concat(props.day)); 
        setcompleted(!completed)}}>
        {props.day}
      </Button>  
  )
}