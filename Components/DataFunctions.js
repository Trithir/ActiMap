import AsyncStorage from '@react-native-async-storage/async-storage';

const readDB = async () => {
  try {
    const DB = await AsyncStorage.getItem('DB')
    if(DB !== null) {
      return JSON.parse(DB)
    }
    else return {"Habits":
    {
    "1":
    {"Name":"Jog","Type":"P","Habit_Days":['Mon', 'Tue',],"Note":"Jog 1 miles < 11 minutes","Deleted":false,"Creation_Date":"2021-09-02","ID":"1"},
    "2":
    {"Name":"Meditate","Type":"M","Habit_Days":['Tue', 'Wed', 'Thu'],"Note":"Two 3 minute sessions, or one 6 minute session.","Deleted":false,"Creation_Date":"2021-09-01","ID":"2"},
    "3":
    {"Name":"Greens","Type":"I","Habit_Days":['Mon', 'Tue', 'Sat'],"Note":"Eat like a rabbit","Deleted":false,"Creation_Date":"2021-09-02","ID":"3"},
    "4":
    {"Name":"Read","Type":"M","Habit_Days":['Sun', 'Tue', 'Fri'],"Note":"Read 1 chapter","Deleted":false,"Creation_Date":"2021-09-01","ID":"4"}
  },
  
  "Completed_Bits":{
    // "2021-09-03":{"IDS":{"1": '16:10',"2": '8:30'}},
    // "2021-09-06":{"IDS":[1,2,3]},
  }
}
} catch(e) {
  // error reading value
}
}

export async function ResetDB(cb){
  let data = {"Habits":{
    "1":
    {"Name":"Jog","Type":"P","Habit_Days":['Mon', 'Tue',],"Note":"Jog 1 miles < 11 minutes","Deleted":false,"Creation_Date":"2021-09-02","ID":"1"},
    "2":
    {"Name":"Meditate","Type":"M","Habit_Days":['Tue', 'Wed', 'Thu'],"Note":"Two 3 minute sessions, or one 6 minute session.","Deleted":false,"Creation_Date":"2021-09-01","ID":"2"},
    "3":
    {"Name":"Greens","Type":"I","Habit_Days":['Mon', 'Tue', 'Sat'],"Note":"Eat like a rabbit","Deleted":false,"Creation_Date":"2021-09-02","ID":"3"},
    "4":
    {"Name":"Read","Type":"M","Habit_Days":['Sun', 'Tue', 'Fri'],"Note":"Read 1 chapter","Deleted":false,"Creation_Date":"2021-09-01","ID":"4"}
  },
  
  "Completed_Bits":{
    
  }
}
await writeDB(data)
cb(Math.random())
}

function GetHabit(id, data) {
  return (
    data.Habits[id]
    );
  }
  
  export function GetCurrentDate(){
    let currentDate = new Date();
    let cDay = currentDate.getDate().toString().padStart(2, "0")
    let cMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0")
    let cYear = currentDate.getFullYear().toString()
    return (cYear + "-" + cMonth + "-" + cDay)
  }
  
  export async function GetOldCompletedHabits(date) {
    let data = await readDB()
    if (data.Completed_Bits[date]){
      return data.Completed_Bits[date].map(
        (E) => {
          let ret = GetHabit(E.ID, data)
          ret.Time=E.Time
          return ret
        })
    }
  }
  
  export async function GetPhysicalHabits() {
    let data = await readDB()
    return Object.values(data.Habits).filter((H) => H.Type == "P").filter((H) => IsTodayHabit(H)).filter((H) => H.Deleted == false)
  }
  export async function GetMentalHabits() {
    let data = await readDB()
    return Object.values(data.Habits).filter((H) => H.Type == "M").filter((H) => IsTodayHabit(H)).filter((H) => H.Deleted == false)
  }
  export async function GetIntakeHabits() {
    let data = await readDB()
    return Object.values(data.Habits).filter((H) => H.Type == "I").filter((H) => IsTodayHabit(H)).filter((H) => H.Deleted == false)
  }
  
  export async function GetAllPhysicalHabits() {
    let data = await readDB()
    return Object.values(data.Habits).filter((H) => H.Type == "P").filter((H) => H.Deleted == false)
  }
  export async function GetAllMentalHabits() {
    let data = await readDB()
    return Object.values(data.Habits).filter((H) => H.Type == "M").filter((H) => H.Deleted == false)
  }
  export async function GetAllIntakeHabits() {
    let data = await readDB()
    return Object.values(data.Habits).filter((H) => H.Type == "I").filter((H) => H.Deleted == false)
  }
  
  export function GetTimeOfDay(){
    let hours = new Date().getHours().toString().padStart(2, "0")
    let minutes = new Date().getMinutes().toString().padStart(2, "0")
    return hours + ':' + minutes
  }
  
  export function SetCompletedHabitButtonColor(type) {
    let color = ''
    switch(type) {
      case "P": color = '#ff7160'
      break;
      case "M": color = '#4bfffb'
      break;
      case "I": color = '#c8ff13'
      break;
    }
    return color
  }
  export function GetDayOfWeek() {
    let date = new Date()
    let day = date.getDay()
    let dayOfWeek = ''
    switch(day) {
      case 0: dayOfWeek = 'Sun'
      break;
      case 1: dayOfWeek = 'Mon'
      break;
      case 2: dayOfWeek = 'Tue'
      break;
      case 3: dayOfWeek = 'Wed'
      break;
      case 4: dayOfWeek = 'Thu'
      break;
      case 5: dayOfWeek = 'Fri'
      break;
      case 6: dayOfWeek = 'Sat'
      break;
    }
    return dayOfWeek
  }
  
  function IsTodayHabit(habit) {
    return habit.Habit_Days.includes(GetDayOfWeek())
  }
  
  const writeDB = async (data) => {
    try {
      await AsyncStorage.setItem('DB', JSON.stringify(data))
    } catch (e) {
      // saving error
    }
  }
  
  // "Name":"Jogging","Type":"P","Habit_Days":['Mon', 'Tue',],"Note":"Jog 2 miles < 20 minutes","Deleted":false,"Creation_Date":"2021-09-02","ID":"0"
  export async function CreateHabit(habit, cb) {
    let data = await readDB()
    habit.Creation_Date = GetCurrentDate()
    habit.Deleted = false
    habit.ID = Object.keys(data["Habits"]).length + 1
    data.Habits[habit.ID]=habit
    await writeDB(data)
    cb(Math.random())
  }
  
  export async function EditHabit(habit, cb) {
    if (!habit.ID) throw('EditHabit requies a completed habit.')
    //updates habit.ID with new info
    let data = await readDB()
    data.Habits[habit.ID]=habit
    await writeDB(data)
    cb(Math.random())
  }
  
  export async function DeleteHabit(ID, cb) {
    if (!ID) throw('DeleteHabit requies a completed habit.')
    let data = await readDB()
    data.Habits[ID].Deleted=true
    await writeDB(data)
    cb(Math.random())
  }
  
  export async function MarkHabitCompleted(id, cb){
    let data = await readDB()
    let currentDate = GetCurrentDate()
    let currentTime = GetTimeOfDay()
    
    if(!data.Completed_Bits){
      data.Completed_Bits = {}
    }
    
    if(data.Completed_Bits[currentDate]) {
      data.Completed_Bits[currentDate].push({"ID": id, "Time": currentTime})
    }
    else {
      data.Completed_Bits[currentDate] = [{"ID": id, "Time": currentTime}]
    }
    await writeDB(data)
    cb(Math.random())
  }
  
  export async function UndoHabitCompleted(id, cb){
    let data = await readDB()
    
    function arrayRemove(arr, value) { 
      return arr.filter(function(ele){ 
        return ele != value; 
      });
    }
    
    let currentDate = GetCurrentDate()
    data.Completed_Bits[currentDate]= data.Completed_Bits[currentDate].filter((E) => E.ID != id) 
    await writeDB(data)
    //remove ID from completed date
    cb(Math.random())
  }
  
  export async function IsCompletedYet(id) {
    let data = await readDB()
    let currentDate = GetCurrentDate()
    if(data.Completed_Bits[currentDate]){
      let ids = GetCompletedIDS(data["Completed_Bits"][currentDate])
      return ids.includes(id)
    } return false
  }
  
  export async function ToggleHabitCompleted(id, cb){
    if(await IsCompletedYet(id)) {
      UndoHabitCompleted(id, cb)
    } 
    else MarkHabitCompleted(id, cb)
  }
  
  // "Name":"Jogging","Type":"P","Habit_Days":['Mon', 'Tue',],"Note":"Jog 2 miles < 20 minutes","Deleted":false,"Creation_Date":"2021-09-02","ID":"0"
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
  
  export function GetCompletedIDS(list) {
    return list.map((E) => E.ID)
  }
  
  export function GetCompletedTime(list, id) {
    return list.filter(day).map((E) => E.ID)
  }
  // "1":{"Name":"Jog","Habit_Days":['Mon', 'Tue',],"Note":"Jog 1 miles < 11 minutes","Deleted":false,"Creation_Date":"2021-09-02","ID":"1"
  // "2021-09-04":[{ID: 2, Time: 18:80}, {ID: 4, Time: 9:19}],
  // "2021-09-15":{"IDS":[2,3]}
  export async function ConvertCalendarData(cb){
    let data = await readDB()
    //completed bits to calendar format
    // for each date, loop over each id to find habit type
    let ret = {}
    let dates = Object.keys(data["Completed_Bits"])
    for(let i=0; i<dates.length; i++) {
      let date = dates[i]
      let ids = GetCompletedIDS(data["Completed_Bits"][date])
      // console.log(ids)
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