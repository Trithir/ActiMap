import React, {useState} from 'react'
import { Button } from 'native-base';
import { HabitModal } from './Modal';

export function NewModalButton(props){
  const [modalVisible, setModalVisible] = useState(false)

return ( 
  <>
    <HabitModal Name={''} Frequency={''} Type={props.Type} Note={''} modalVisible={modalVisible} setModalVisible={setModalVisible} setrefreshToken={props.setrefreshToken}/>
    <Button
      onPress={() => {
        setModalVisible(!modalVisible)
      }}
    >
      +
    </Button>
  </>
)}