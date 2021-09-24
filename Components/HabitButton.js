import React, { useState, useEffect } from 'react';
import { Button } from 'native-base';
import { IsCompletedYet, ToggleHabitCompleted } from './DataFunctions';
import { HabitModal } from './Modal/Modal';

export default function HabitButton(props){
  const [modalVisible, setModalVisible] = useState(false)
  const [completed, setcompleted] = useState(false) //check completed for current day
  const [refreshToken, setrefreshToken] = useState(props.refreshToken)
  useEffect(() => {
    IsCompletedYet(props.ID)
    .then(data =>
      setcompleted(data)
    );
  }, [refreshToken])

return (
  <>
    <HabitModal Name={props.Name} Type={props.Type} Habit_Days={props.Habit_Days} Note={props.Note} modalVisible={modalVisible} setModalVisible=      {setModalVisible} ID={props.ID} Creation_Date={props.Creation_Date} Deleted={props.Deleted} setrefreshToken={props.setrefreshToken}/>
    <Button variant={completed ? "outline" :"solid"} onPress={async () => ToggleHabitCompleted(props.ID, setrefreshToken)} onLongPress={() =>       setModalVisible(true)}>{props.Name}</Button></>)
}