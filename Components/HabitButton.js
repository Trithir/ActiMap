import React, { useState, useEffect } from 'react';
import { Button } from 'native-base';
import { MarkHabitCompleted, IsCompletedYet } from './DataFunctions';
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
    <HabitModal Name={props.Name} Type={props.Type} Frequency={props.Frequency} Note={props.Note} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    <Button variant={completed ? "outline" :"solid"} onPress={async () => MarkHabitCompleted(props.ID, setrefreshToken)} onLongPress={() => {setModalVisible(true), console.log('longpress')}}>{props.Name}</Button></>)
}