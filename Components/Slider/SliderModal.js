import React, {useState, useRef} from "react"
import { Modal, Button, FormControl, Center } from "native-base"
import { SliderThing } from "./Slider"


export function SliderModal(props) {

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <>
      <Modal
        isOpen={props.modalVisible}
        onClose={() => props.setModalVisible(false)}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content 
        bg={{
          linearGradient: {
            colors: ['#ff7160', '#ce2fff'],
            start: [0, 0],
            end: [1, 0],
          },
        }}>
          <Modal.CloseButton />
          <Center>
            <Modal.Header>Set a reminder!</Modal.Header>
          </Center>
          <Modal.Body>
            <FormControl >
              <SliderThing/>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button onPress={() => console.log('saved reminder placeholder?')}>Set Calendar Reminder</Button>
              <Button onPress={() => console.log('deleted reminders?')}>Delete Calendar Reminder</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}