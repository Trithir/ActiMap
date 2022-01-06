import React, {useState} from 'react'
import { Button } from 'native-base';
import { SliderModal } from './SliderModal';
import { GetCurrentDate } from '../DataFunctions';

export function SliderModalButton(props){
  const [modalVisible, setModalVisible] = useState(false)
  const date = GetCurrentDate()
return ( 
  <>
    <SliderModal modalVisible={modalVisible} setModalVisible={setModalVisible} date={date} />
    <Button
      colorScheme="green"
      onPress={() => { 
        setModalVisible(!modalVisible)
      }}
    >
      TriHabit Reminder
    </Button>
  </>
)}