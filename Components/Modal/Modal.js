import React, {useState, useRef} from "react"
import { Modal, Button, Input, FormControl } from "native-base"
import HabitType from "./HabitTypeSelector"
import { CreateHabit, DeleteHabit, EditHabit, GetDayOfWeek, ResetDB } from "../DataFunctions"
import WeekdaySelector from "./WeekdaySelector"
import moment from 'moment'

export function HabitModal(props) {
  const [habitName, sethabitName] = useState(props.Name)
  const [habitNote, sethabitNote] = useState(props.Note)
  const [habitType, sethabitType] = useState(props.Type)
  const [habitDays, sethabitDays] = useState(props.Habit_Days)
  const [showName, setshowName] = useState(false)
  const [deleteText, setdeleteText] = useState('Delete')
  const permType = props.Type


  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const habitNameChange = (text) => {
    sethabitName(text) 
  }
  const habitNoteChange = (text) => {
    sethabitNote(text) 
  }
  function ClearModal() {
    props.setModalVisible(!props.modalVisible)
    sethabitName('') 
    sethabitDays([GetDayOfWeek()]) 
    sethabitType(permType)
    sethabitNote('')
    setshowName(false)
  }

  SetAlarm = async () => {
    try {
      // await createAlarm({
      //     active: false,
      //     date: moment().format(),
      //     message: 'message',
      //     snooze: 1,
      //   });
    } catch (e) {}
  }

  return (
    <>
      <Modal
        isOpen={props.modalVisible}
        onClose={() => {props.setModalVisible(false); if(!props.ID){ClearModal()}}}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Habit Setter!</Modal.Header>
          <Modal.Body>
            <HabitType sethabitType={sethabitType} Type={habitType}/>
            {/* <Button onPress={() => (console.log(habitType, habitName, habitDays, habitNote), GetDayOfWeek())}>Data?</Button> */}
            <FormControl isRequired isInvalid={showName}>
              <Input
                mt={4}
                value={habitName}
                placeholder={!showName ? "Name your habit" : 'Ooops, needs a Name!'}
                onChangeText={habitNameChange}
              />
            </FormControl>
            <WeekdaySelector habitDays={habitDays} sethabitDays={sethabitDays}/>
            <Input
              mt={4}
              value={habitNote}
              placeholder="Give yourself some notes"
              onChangeText={habitNoteChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              {/* <Button onPress={() => SetAlarm()}>Alarm</Button> */}
              {props.ID ? 
                <Button onPress={() => setdeleteText('Hold to Delete')} onLongPress={async () =>{
                  await DeleteHabit(props.ID, props.setrefreshToken)
                }}>{deleteText}</Button>
                : <></> 
              } 
              <Button onPress={async () => {
                if (habitName == '') {
                  setshowName(true)
                } else {
                  if (props.ID) {
                    await EditHabit({Name:habitName, Type:habitType, Creation_Date:props.Creation_Date, Deleted:props.Deleted, Habit_Days:habitDays, Note:habitNote, ID:props.ID}, props.setrefreshToken)
                  }
                  else {
                    await CreateHabit({Name:habitName, Type:habitType,  Habit_Days:habitDays, Note:habitNote}, props.setrefreshToken)
                  }                  
                  ClearModal()
                }}}
                onLongPress={async () => {
                  await ResetDB(props.setrefreshToken)
                  props.setModalVisible(!props.modalVisible)
                }}
                >SAVE</Button>
              {/* <Button onPress={async () => {
                await ResetDB()
                props.setModalVisible(!props.modalVisible)
              }}>ResetHabits</Button> */}
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}