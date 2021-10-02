import React, {useState, useRef, useEffect} from "react"
import { Modal, Button, Input, FormControl, Center } from "native-base"
import { ScrollView } from 'react-native';
import HabitButton from "../HabitButton"
import HabitType from "./HabitTypeSelector"
import { CreateHabit, DeleteHabit, EditHabit, GetDayOfWeek, GetOldCompletedHabits, ResetDB } from "../DataFunctions"
import WeekdaySelector from "./WeekdaySelector"

export function CompletedModal(props) {
  const [completedHabits, setcompletedHabits] = useState([])
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  useEffect(() => {
    GetOldCompletedHabits(props.date)
    .then(data =>
      setcompletedHabits(data))
  }, [props.date])

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
          <ScrollView horizontal={true}>
            {completedHabits ? 
              completedHabits.map(habit => <Button key={habit.ID}  ID={habit.ID} Name={habit.Name} Type={habit.Type} Habit_Days={habit.Habit_Days} Note={habit.Note} Creation_Date={habit.Creation_Date} Deleted={habit.Deleted}>{habit.Name}</Button>)
              : <Button>No Habits to view</Button>
            }
          </ScrollView>
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