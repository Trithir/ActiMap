import AsyncStorage from '@react-native-async-storage/async-storage';

const readDB = async () => {
  try {
    const DB = await AsyncStorage.getItem('DB')
    if(DB !== null) {
      return JSON.parse(DB)
    }
    else return {"Habits":
    {"1":
    {"Name":"Jogger","Type":"P","Frequency":2,"Note":"Jog 2 miles < 20 minutes","Deleted":false,"Creation_Date":"2021-09-02","ID":"1"},
    "2":
    {"Name":"Meditate","Type":"M","Frequency":3,"Note":"Two 10 minute sessions, or one 20 minute session.","Deleted":false,"Creation_Date":"2021-09-01","ID":"2"},
    "3":
    {"Name":"Greens","Type":"I","Frequency":1,"Note":"Eat like a rabbit","Deleted":false,"Creation_Date":"2021-09-02","ID":"3"},
    "4":
    {"Name":"Read","Type":"M","Frequency":2,"Note":"Read 3 chapters","Deleted":false,"Creation_Date":"2021-09-01","ID":"4"}
  },
  
  "Completed_Bits":{
    "2021-09-03":{"IDS":[1,2]},
    "2021-09-04":{"IDS":[2,3]},
    "2021-09-06":{"IDS":[1,2,3]},
    "2021-09-15":{"IDS":[2,3]}
  }
  }
  } catch(e) {
    // error reading value
  }
}

export async function ResetDB(){
  let data = {"Habits":
  {"1":
  {"Name":"Jogger","Type":"P","Frequency":2,"Note":"Jog 2 miles < 20 minutes","Deleted":false,"Creation_Date":"2021-09-02","ID":"1"},
  "2":
  {"Name":"Meditate","Type":"M","Frequency":3,"Note":"Two 10 minute sessions, or one 20 minute session.","Deleted":false,"Creation_Date":"2021-09-01","ID":"2"},
  "3":
  {"Name":"Greens","Type":"I","Frequency":1,"Note":"Eat like a rabbit","Deleted":false,"Creation_Date":"2021-09-02","ID":"3"},
  "4":
  {"Name":"Read","Type":"M","Frequency":2,"Note":"Read 3 chapters","Deleted":false,"Creation_Date":"2021-09-01","ID":"4"}
  },

  "Completed_Bits":{
    "2021-09-03":{"IDS":[1,2]},
    "2021-09-04":{"IDS":[2,3]},
    "2021-09-06":{"IDS":[1,2,3]},
    "2021-09-15":{"IDS":[2,3]}
  }
}
  await writeDB(data)
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

const writeDB = async (data) => {
  try {
    await AsyncStorage.setItem('DB', JSON.stringify(data))
  } catch (e) {
    // saving error
  }
}

// "Name":"Jogging","Type":"P","Frequency":2,"Note":"Jog 2 miles < 20 minutes","Deleted":false,"Creation_Date":"2021-09-02","ID":"0"
export async function CreateHabit(habit, cb) {
  let data = await readDB()
  habit.Creation_Date = GetCurrentDate()
  habit.Deleted = false
  habit.ID = Object.keys(data["Habits"]).length + 1
  data.Habits[habit.ID]=habit
  await writeDB(data)
  cb(Math.random())
}

export async function MarkHabitCompleted(id, cb){
  let data = await readDB()
  let currentDate = GetCurrentDate()

  if(!data.Completed_Bits){
    data.Completed_Bits = {}
  }

  if(data.Completed_Bits[currentDate]) {
    data.Completed_Bits[currentDate].IDS.push(id)
  }
  else {
    data.Completed_Bits[currentDate] = {"IDS": [id]}
  }
  await writeDB(data)
  cb(Math.random())
}

export async function IsCompletedYet(id) {
  let data = await readDB()
  let currentDate = GetCurrentDate()
  if(data.Completed_Bits[currentDate]){
    let ids = data["Completed_Bits"][currentDate].IDS
    return ids.includes(id)
  } return false
}

function GetDailyHabits() {
  //Get current date
  let currentDate = GetCurrentDate()
  //List of all Habits available that day based on Frequency
}

function UndoHabitCompleted(date, id){
  let currentDate = GetCurrentDate()
  //remove ID from completed date
}

// "Name":"Jogging","Type":"P","Frequency":2,"Note":"Jog 2 miles < 20 minutes","Deleted":false,"Creation_Date":"2021-09-02","ID":"0"
function GetHabitDotsData(id, data) {
  const P = {key: 'Physical', color: '#ff7160'};
  const M = {key: 'Mental', color: '#4bfffb'};
  const I = {key: 'Input', color: '#c8ff13'};
  let type = GetHabit(id, data).Type
  if (type == "M")
    return M
  if (type == "P")
    return P
  if (type == "I")
    return I
}

export async function ConvertCalendarData(cb){
  let data = await readDB()
  //completed bits to calendar format
  // for each date, loop over each id to find habit type
  let ret = {}
  let dates = Object.keys(data["Completed_Bits"])
  for(let i=0; i<dates.length; i++) {
    let date = dates[i]
    let ids = data["Completed_Bits"][date].IDS
    let dots = ids.map((i) => GetHabitDotsData(i, data))
    let showDots = []
    let keys = []
    for(let i=0; i<dots.length;i++) {
      if(showDots.length == 3) {
        break; 
      }
      if(!keys.includes(dots[i].key)) { //if keys does not have current key, add current key to keys and showDots
        keys.push(dots[i].key)
        showDots.push(dots[i])
      }
    }
    ret[date] = {'dots': showDots}
  }
  cb(Math.random())
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