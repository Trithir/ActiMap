import React, {useState, useEffect, useRef} from "react"
import { Modal, Button, Input } from "native-base"
import HabitType from "./ButtonGroup"
import {Frequency} from "./Frequency"
import { CreateHabit, EditHabit, ResetDB } from "../DataFunctions"

export function HabitModal(props) {
  // const [modalVisible, setModalVisible] = useState(props.modalVisible)
  const [habitName, sethabitName] = useState(props.Name)
  const [habitNote, sethabitNote] = useState(props.Note)
  const [habitFrequency, sethabitFrequency] = useState(props.Frequency)
  const [habitType, sethabitType] = useState(props.Type)
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
        isOpen={props.modalVisible}
        onClose={props.setModalVisible}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Habit Setter!</Modal.Header>
          <Modal.Body>
            <HabitType sethabitType={sethabitType} Type={habitType}/>
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
                // if props.ID exists, edit, else CreateHabit
                if (props.ID) {
                  await EditHabit({Name:habitName, Type:habitType, Creation_Date:props.Creation_Date, Deleted:props.Deleted, Frequency:habitFrequency, Note:habitNote, ID:props.ID}, props.setrefreshToken)
                  props.setModalVisible(!props.modalVisible)
                }
                else await CreateHabit({Name:habitName, Type:habitType,  Frequency:habitFrequency, Note:habitNote}, props.setrefreshToken)
                props.setModalVisible(!props.modalVisible)
                }}>SAVE</Button>
              <Button onPress={async () => {
                await ResetDB()
                props.setModalVisible(!props.modalVisible)
              }}>ResetDB</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}