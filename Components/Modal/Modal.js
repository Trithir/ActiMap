import React from "react"
import { Modal, Button, Input, Center, NativeBaseProvider } from "native-base"
import HabitType from "./ButtonGroup"
import Frequency from "./Frequency"

export function HabitModal() {
  const [modalVisible, setModalVisible] = React.useState(false)
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
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
            <HabitType />
            <Input
              mt={4}
              ref={initialRef}
              placeholder="Name your habit"
            />
            <Frequency />
            <Input
              mt={4}
              placeholder="Give yourself some notes"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              {/* save button to save all text fields and checks/creates ID */}
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
        Open Modal
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
