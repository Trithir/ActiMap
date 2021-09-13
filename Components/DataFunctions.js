import AsyncStorage from '@react-native-async-storage/async-storage';

const writeDB = async () => {
  try {
    await AsyncStorage.setItem('DB', JSON.stringify(data))
  } catch (e) {
    // saving error
  }
}

const readDB = async () => {
  try {
    const DB = await AsyncStorage.getItem('DB')
    if(DB !== null) {
      return JSON.parse(DB)
    }
    else return {"Habits":
    {"0":
    {"Name":"Jogging","Type":"P","Frequency":2,"Note":"Jog 2 miles < 20 minutes","Deleted":false,"Creation_Date":"2021-09-02","ID":"0"},
    "1":
    {"Name":"Meditate","Type":"M","Frequency":3,"Note":"Two 10 minute sessions, or one 20 minute session.","Deleted":false,"Creation_Date":"2021-09-01","ID":"1"},
    "2":
    {"Name":"Greens","Type":"I","Frequency":1,"Note":"Eat like a rabbit","Deleted":false,"Creation_Date":"2021-09-02","ID":"2"},
    "3":
    {"Name":"Read","Type":"M","Frequency":2,"Note":"Read 3 chapters","Deleted":false,"Creation_Date":"2021-09-01","ID":"3"}
  },
  
  "Completed Bits":{
    "2021-09-03":{"IDS":[0,1]},
    "2021-09-04":{"IDS":[0,2]},
    "2021-09-06":{"IDS":[0,1,2]}
  }
}
} catch(e) {
  // error reading value
}
}

function GetHabit(id, data) {
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
  
  export async function GetPhysicalHabits() {
    let data = await readDB()
    return Object.values(data.Habits).filter((H) => H.Type == "P")
  }
  
  export async function GetMentalHabits() {
    let data = await readDB()
    return Object.values(data.Habits).filter((H) => H.Type == "M")
  }
  
  export async function GetIntakeHabits() {
    let data = await readDB()
    return Object.values(data.Habits).filter((H) => H.Type == "I")
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

function GetHabitDotsData(id, data) {
  const P = {key: 'Physical', color: 'red', selectedDotColor: 'blue'};
  const M = {key: 'Mental', color: 'blue', selectedDotColor: 'blue'};
  const I = {key: 'Input', color: 'green', selectedDotColor: 'blue'};
  let type = GetHabit(id, data).Type
  if (type == "M")
    return M
  if (type == "P")
    return P
  if (type == "I")
    return I
}

export async function ConvertCalendarData(){
  let data = await readDB()
  //completed bits to calendar format
  // for each date, loop over each id to find habit type
  let ret = {}
  let dates = Object.keys(data["Completed Bits"])
  for(let i=0; i<dates.length; i++) {
    let date = dates[i]
    let ids = data["Completed Bits"][date].IDS
    let dots = {dots: ids.map((i) => GetHabitDotsData(i, data))}
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
// GetCurrentDate()
// module.exports = {GetHabit}