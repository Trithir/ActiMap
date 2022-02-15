import React, {useState, useRef} from "react"
import { Modal, Button, FormControl, Center, Text } from "native-base"
import { SliderThing } from "./Slider"
import { SaveEvent } from "../Events/SaveEvent"
import { RemoveEvent } from "../Events/RemoveEvent"
import { FetchEvents } from "../Events/FetchEvents"

// SaveEvent()
// RemoveEvent()
// FetchEvents()
export function SliderModal(props) {

  const [onChangeValue, setOnChangeValue] = React.useState(1)
  const [eventId, setEventId] = useState(undefined)
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
              {/* <SliderThing onChangeValue={onChangeValue} setOnChangeValue={setOnChangeValue} /> */}
              <Text>Daily Reminder at 5 PM Pacific time</Text>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button onPress={() => SaveEvent().then((eventID) => {
                console.log(eventID, "save event end log")
                setEventId(eventID)
              }
              )}>Save</Button>
              <Button onPress={() => RemoveEvent(eventId)}>Remove</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}