import React, { useState, useEffect } from 'react';
import { Button } from 'native-base';
import { MarkHabitCompleted, IsCompletedYet } from './DataFunctions';

export default function HabitButton(props){
  const [completed, setcompleted] = useState(false) //check completed for current day
  const [refreshToken, setrefreshToken] = useState(props.refreshToken)
  useEffect(() => {
    IsCompletedYet(props.ID)
    .then(data =>
      setcompleted(data)
    );
  }, [refreshToken])

return <Button variant={completed ? "outline" :"solid"} onPress={async () => MarkHabitCompleted(props.ID, setrefreshToken)}>{props.Name}</Button>
}