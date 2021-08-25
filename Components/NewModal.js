import React from "react"
import { Modal, Button, Input, Center, NativeBaseProvider } from "native-base"

export function NewModal() {
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
            This is where habit type selector goes.
            <Input
              mt={4}
              ref={initialRef}
              placeholder="Name your habit"
            />
            <Input
              mt={4}
              placeholder="Give yourself some notes"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
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
