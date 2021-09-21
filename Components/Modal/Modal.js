import React, {useState, useEffect, useRef} from "react"
import { Modal, Button, Input } from "native-base"
import HabitType from "./ButtonGroup"
import {Frequency} from "./Frequency"
import { CreateHabit, ResetDB } from "../DataFunctions"

export function HabitModal(props) {
  const [modalVisible, setModalVisible] = useState(false)
  const [habitName, sethabitName] = useState('')
  const [habitNote, sethabitNote] = useState('')
  const [habitFrequency, sethabitFrequency] = useState('')
  const [habitType, sethabitType] = useState('')
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const habitNameChange = (text) => {
    sethabitName(text) 
  }
  const habitNoteChange = (text) => {
    sethabitNote(text) 
  }
  function clearModal(){
    sethabitName('')
    sethabitNote('')
    sethabitFrequency('')
    sethabitType('')
  }
  return (
    <>
      <Modal
        isOpen={modalVisible}
        onClose={setModalVisible}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Habit Setter!</Modal.Header>
          <Modal.Body>
            <HabitType sethabitType={sethabitType}/>
            <Button onPress={() => console.log(habitType, habitName, habitFrequency, habitNote)}>Data?</Button>
            <Input
              mt={4}
              value={habitName}
              ref={initialRef}
              placeholder="Name your habit"
              onChangeText={habitNameChange}
            />
            <Frequency sethabitFrequency={sethabitFrequency} />
            <Input
              mt={4}
              value={habitNote}
              placeholder="Give yourself some notes"
              onChangeText={habitNoteChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button onPress={async () => {
                await CreateHabit({Name:habitName, Type:habitType,  Frequency:habitFrequency, Note:habitNote}, props.setrefreshToken)
                setModalVisible(!modalVisible)
                }}>SAVE</Button>
              <Button onPress={async () => {
                await ResetDB()
                setModalVisible(!modalVisible)
              }}>ResetDB</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button
        onPress={() => {
          clearModal()
          setModalVisible(!modalVisible)
        }}
      >
        +
      </Button>
    </>
  )
}