import React, {useState, useRef} from "react"
import { Modal, Button, FormControl, Center } from "native-base"
import { SliderThing } from "./Slider"
import { SaveEvent } from "../Events/SaveEvent"
import { RemoveEvent } from "../Events/RemoveEvent"
import { FetchEvents } from "../Events/FetchEvents"

// SaveEvent()
// RemoveEvent()
// FetchEvents()
export function SliderModal(props) {

  const [onChangeValue, setOnChangeValue] = React.useState(1)
  let reminderTime = onChangeValue

  switch (onChangeValue) {
    case 1: 
      setOnChangeValue('Off')
      break;
    case 2: 
      setOnChangeValue('Morning')
      break;
    case 3: 
      setOnChangeValue('Afternoon')
      break;
    case 4: 
      setOnChangeValue('Evening')
      break;
  }

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
              <SliderThing onChangeValue={onChangeValue} setOnChangeValue={setOnChangeValue} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button onPress={() => SaveEvent()}>Update</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}