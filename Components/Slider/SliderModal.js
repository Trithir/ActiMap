import React, {useState, useRef} from "react"
import { Modal, Button, FormControl, Center, Text } from "native-base"
import { SliderThing } from "./Slider"
import { SaveEvent } from "../Events/SaveEvent"
import { RemoveEvent } from "../Events/RemoveEvent"
import RNCalendarEvents from "react-native-calendar-events";
import { EventIdSaveToDb } from "../DataFunctions"
<EventIdSaveToDb></EventIdSaveToDb>

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
            <Button
                  title="Check auth"
                  onPress={() => {
                    RNCalendarEvents.checkPermissions().then(
                      (result) => {
                        console.log('Auth check', result);
                      },
                      (result) => {
                        console.error(result);
                      },
                    );
                  }}
                >check</Button>
            <Button
                  title="Request auth"
                  onPress={() => {
                    RNCalendarEvents.requestPermissions().then(
                      (result) => {
                        console.log('Auth requested', result);
                      },
                      (result) => {
                        console.error(result);
                      },
                    );
                  }}
                >req</Button>
                <Button
                  title="Find calendars"
                  onPress={() => {
                    RNCalendarEvents.findCalendars().then(
                      (result) => {
                        console.log(
                          'Calendars',
                          result
                        );
                      },
                      (result) => {
                        console.error(result);
                      },
                    );
                  }}
                >findCal</Button>
              <Button onPress={() => SaveEvent().then(async(eventID) => {
                await RemoveEvent()
                console.log(eventID, "save event end log")
                await EventIdSaveToDb(eventID)
              }
              )}>Save</Button>
              <Button onPress={() => RemoveEvent()}>Remove</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}