import React, {useState} from 'react'
import { Button, Center, Text } from 'native-base';
import { SliderModal } from './SliderModal';
import { GetCurrentDate } from '../DataFunctions';

export function SliderModalButton(props){
  const [modalVisible, setModalVisible] = useState(false)
  const date = GetCurrentDate()
return ( 
  <>
    <SliderModal modalVisible={modalVisible} setModalVisible={setModalVisible} date={date} />
      <Button
        w={175}
        colorScheme="green"
        onPress={() => { 
          setModalVisible(!modalVisible)
        }}
      >
        Calendar Reminder:
      </Button>
  </>
)}