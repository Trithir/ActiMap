import React from "react"
import { Modal, Button, Input } from "native-base"
import HabitType from "./ButtonGroup"
import {Frequency} from "./Frequency"
import { CreateHabit, ResetDB } from "../DataFunctions"

export function HabitModal(props) {
  const [modalVisible, setModalVisible] = React.useState(false)
  const [habitName, sethabitName] = React.useState('')
  const [habitNote, sethabitNote] = React.useState('')
  const [habitFrequency, sethabitFrequency] = React.useState('')
  const [habitType, sethabitType] = React.useState('')
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const habitNameChange = (text) => {
    sethabitName(text) 
  }
  const habitNoteChange = (text) => {
    sethabitNote(text) 
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
                await CreateHabit({Name:habitName, Type:habitType,  Frequency:habitFrequency, Note:habitNote})
                setModalVisible(!modalVisible)
                }}>SAVE</Button>
              <Button onPress={async () => {
                await ResetDB()
                setModalVisible(!modalVisible)
              }}>ClearDB</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button
        onPress={() => {
          setModalVisible(!modalVisible)
        }}
      >
        +
      </Button>
    </>
  )
}