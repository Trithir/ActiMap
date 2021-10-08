import React, {useState, useRef, useEffect} from "react"
import { Modal, Button, Center, Text } from "native-base"
import { ScrollView } from 'react-native';
import { GetCompletedIDS, GetOldCompletedHabits, GetTimeOfDay, SetCompletedHabitButtonColor } from "../DataFunctions"

export function CompletedModal(props) {
  const [completedHabits, setcompletedHabits] = useState([])
  const [habitTime, sethabitTime] = useState('')
  const [habitName, sethabitName] = useState('')
  const [isLoading, setisLoading] = useState(true)
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  useEffect(() => {
    console.log('Top of useEffect', isLoading)
    setisLoading(true)
    setcompletedHabits([])
    GetOldCompletedHabits(props.date)
    .then(data =>{
      setcompletedHabits(data)
      setisLoading(false)})
  }, [])

  return (
    <>
      <Modal
        isOpen={props.modalVisible}
        onClose={() => {props.setModalVisible(false)}}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Center>
          <Modal.Header>Completed {props.date}</Modal.Header>
          <Modal.Body>
          <Center>
            <ScrollView horizontal={true}>
              {isLoading ? <Text>Loading Habits</Text> 
              : (completedHabits.length>0 ? completedHabits.map(habit => <Button key={habit.ID}  ID={habit.ID} Name={habit.Name} Type={habit.Type} Habit_Days={habit.Habit_Days} Note={habit.Note} Creation_Date={habit.Creation_Date} Deleted={habit.Deleted} backgroundColor={SetCompletedHabitButtonColor(habit.Type)} color="white" onPress={() => {sethabitTime(habit.Time); sethabitName(habit.Name)}}>{habit.Name}</Button>) 
              : <Button onPress={() => {props.setModalVisible(false)}} colorScheme="secondary" >None today</Button>)
              }
            </ScrollView>
          </Center>
          {habitName ?
            <Text mt={2}>Completed {habitName} at {habitTime}</Text>
            : ''
          }
          </Modal.Body>
          </Center>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}