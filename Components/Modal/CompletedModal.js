import React, {useState, useRef, useEffect} from "react"
import { Modal, Button, Center, Text } from "native-base"
import { ScrollView } from 'react-native';
import { GetOldCompletedHabits, SetCompletedHabitButtonColor, GetTotalCompleteOfID } from "../DataFunctions"
import BarChart from "./CompletedBarChart";

export function CompletedModal(props) {
  const [completedHabits, setcompletedHabits] = useState([])
  const [habitTime, sethabitTime] = useState('')
  const [habitName, sethabitName] = useState('')
  const [habitID, sethabitID] = useState(0)
  const [habitTotal, sethabitTotal] = useState(0)
  const [isLoading, setisLoading] = useState(true)
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  useEffect(() => {
    setisLoading(true)
    setcompletedHabits([])
    GetOldCompletedHabits(props.date)
    .then(data =>{
      setcompletedHabits(data)
      setisLoading(false)})
  }, [])
  useEffect(() => {
    GetTotalCompleteOfID(habitID)
    .then(total => {
      sethabitTotal(total)
    })
  }, [habitID])
  
  return (
    <>
      <Modal
        isOpen={props.modalVisible}
        onClose={() => {props.setModalVisible(false)}}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content       
        bg={{
          linearGradient: {
            colors: ['lightBlue.300', '#ce2fff'],
            start: [0, 0],
            end: [1, 0],
          },
        }}>
          <Modal.CloseButton />
          <Center>
            <Modal.Header> On this day {props.date}</Modal.Header>
          </Center>
          <Modal.Body>
          <Center> 
              <ScrollView horizontal={true}>
                {isLoading ? <Text>Loading Habits</Text> 
                : (completedHabits.length>0 ? completedHabits.map(habit => <Button key={habit.ID}  ID={habit.ID} Name={habit.Name} Type={habit.Type} Habit_Days={habit.Habit_Days} Note={habit.Note} Creation_Date={habit.Creation_Date} Deleted={habit.Deleted} backgroundColor={SetCompletedHabitButtonColor(habit.Type)} color="white" onPress={() => {sethabitTime(habit.Time); sethabitName(habit.Name); 
                sethabitID(habit.ID)}}>{habit.Name}</Button>) 
                : <Button onPress={() => {props.setModalVisible(false)}} colorScheme="secondary" >None today</Button>)
                }
              </ScrollView>
            </Center>
            <Center>
              {habitName ?
                <><Text mt={2}>{habitName} completed {habitTotal} times! </Text>
                <Text>Completed at {habitTime}</Text></>
                : ''
              }
            </Center>
            <Center>
              <BarChart date={props.date}/>
            </Center>
            </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}