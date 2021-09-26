import React, {useState} from 'react'
import { Button } from 'native-base';
import { HabitModal } from './Modal';
import { GetDayOfWeek } from '../DataFunctions';

export function NewModalButton(props){
  const [modalVisible, setModalVisible] = useState(false)
  const day = GetDayOfWeek()
return ( 
  <>
    <HabitModal Name={''} Habit_Days={[day]} Type={props.Type} Note={''} modalVisible={modalVisible} setModalVisible={setModalVisible} setrefreshToken={props.setrefreshToken}/>
    <Button
      onPress={() => {
        setModalVisible(!modalVisible)
      }}
    >
      +
    </Button>
  </>
)}