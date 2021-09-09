import AsyncStorage from '@react-native-async-storage/async-storage';

const data = require('./fake.json')
// const fs = require('fs');

function GetHabit(id) {
  return (
    data.Habits[id]
  );
}

function GetCurrentDate(){
  let currentDate = new Date();
  let cDay = currentDate.getDate().toString().padStart(2, "0")
  let cMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0")
  let cYear = currentDate.getFullYear().toString()
  return (cYear + "-" + cMonth + "-" + cDay)
}

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value)
  } catch (e) {
    // saving error
  }
}

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      console.log(value)
    }
  } catch(e) {
    // error reading value
  }
}

function WriteToDatabase() {
  //use async storage
  // fs.writeFile('./fake.json', JSON.stringify(data), err => {
  //   if (err) {
  //     console.error(err)
  //     return
  //   }
  //   //file written successfully
  // })
}

function ShowApplicableHabit(type) {
  //match habits to be displayed for type. 
  //Called in Physical/Mental/Intake to set buttons
}

function CreateHabit(habit) {
  let creationDate = GetCurrentDate()
  //set id.....Habits.length + 1
    //<HabitModal /> data
    //set Deleted: false
    //set Creation_Date
    //WriteToDatabase()
}

function CheckIfTodayHabit(id) {
  let currentDate = GetCurrentDate()
  //Use start date, frequency, current date to determine
}

function GetDailyHabits() {
  //Get current date
  let currentDate = GetCurrentDate()
  //List of all Habits available that day based on Frequency
}

function MarkHabitCompleted(date, id){
  let currentDate = GetCurrentDate()
  //add to completed array
  //get current date
  //get id of completed habit
  // "Completed Bits":{
  //   "2021-09-04":{"IDS":0},
  //   "2021-09-03":{"IDS":[0,1]}}}
}

function UndoHabitCompleted(date, id){
  let currentDate = GetCurrentDate()
  //remove ID from completed date
}

function GetHabitDotsData(id) {
  const P = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const M = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const I = {key: 'workout', color: 'green', selectedDotColor: 'blue'};
  let type = GetHabit(id).Type
  if (type == "M")
    return M
  if (type == "P")
    return P
  if (type == "I")
    return I
}

function ConvertCalendarData(){
  //completed bits to calendar format
  // for each date, loop over each id to find habit type
  let ret = {}
  let dates = Object.keys(data["Completed Bits"])
  for(let i=0; i<dates.length; i++) {
    let date = dates[i]
    let ids = data["Completed Bits"][date].IDS
    let dots = {dots: ids.map((i) => GetHabitDotsData(i))}
    ret[date] = dots
  }
  return ret
}

//TESTS//
// let  habit = GetHabit(1)
// console.log(habit)
// habit.Frequency = 3
// console.log(GetHabit(1))
// WriteToDatabase()
GetCurrentDate()
// module.exports = {GetHabit}