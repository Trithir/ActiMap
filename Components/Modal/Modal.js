import React from "react"
import { Modal, Button, Input, Center, NativeBaseProvider, Text } from "native-base"
import HabitType from "./ButtonGroup"
import {Frequency} from "./Frequency"
import TextInput from "react-native"

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
              {/* call CreateHabit() from DataFunctions.js */}
              <Button>SAVE</Button>
              <Button
                onPress={() => {
                  setModalVisible(!modalVisible)
                }}
                colorScheme="secondary"
              >
                CLOSE
              </Button>
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

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
