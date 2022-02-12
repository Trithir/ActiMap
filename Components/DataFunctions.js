import AsyncStorage from '@react-native-async-storage/async-storage';

const writeDB = async (data) => {
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
    // "2021-09-04":[{physCompleteDot: false, mentCompleteDot: false, intCompleteDot: false} {ID: 2, Time: 18:80}, {ID: 4, Time: 9:19}]
    // "2021-09-22":{
      // CompletionEvents:[{ID: 2, Time: 18:80}, {ID: 3, Time: 13:10} {ID: 4, Time: 9:19}]
      // DotsGot:['M', 'I']}
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
 
  },

  "Dotts":{
    // "2021-09-04":{physCompleteDot: true, mentCompleteDot: false, intCompleteDot: true}
    // "2021-09-05":{physCompleteDot: false, mentCompleteDot: true, intCompleteDot: true}
    // "2021-09-06":{physCompleteDot: true, mentCompleteDot: false, intCompleteDot: false}
  }
}
  await writeDB(data)
  cb(Math.random())
}

function GetHabit(ID, data) {
  return (
    data.Habits[ID]
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
  return []
}

function IdsToTypeArray(listOfIds, data){
  if (listOfIds.length == 0) {
    return []
  }
  let pCount = mCount = iCount = 0
  let listOfTypes = listOfIds.map((id) => GetHabit(id, data).Type)
  
  for (let i=0; i<listOfTypes.length; i++) {
    if (listOfTypes[i] == "M") mCount += 1
    else if (listOfTypes[i] == "P") pCount +=1 
    else if (listOfTypes[i] == "I") iCount += 1
  }
  return [pCount, mCount, iCount]
}
  
export async function GetTotalCompleteOfID(ID){
  //Key:{key:[{key:value, key:value},{key:value, key:value}], key:[{key:value, key:value},{key:value, key:value}]}
  let data = await readDB()
  let totalIDCompleted = 0
  let completedHabitsList = Object.values(data.Completed_Bits)
  for(let i=0; i<completedHabitsList.length; i++) {
    for (let j=0; j<completedHabitsList[i].length; j++) {
      if (completedHabitsList[i][j].ID == ID) totalIDCompleted += 1
    }
  }
  return totalIDCompleted
}

export async function StackedGraphTypeData (date) {
  let data = await readDB()
  let month = date.substring(0, 7)
  let week1ids = []
  let week2ids = []
  let week3ids = []
  let week4ids = []
  let completedThisMonth = (Object.entries(data["Completed_Bits"])).filter((e) => e[0].includes(month))

  for(let i=0; i<completedThisMonth.length; i++) {
    for (let j=0; j<completedThisMonth[i][1].length; j++) {
      if(+completedThisMonth[i][0].substring(8, 10)>=1 && +completedThisMonth[i][0].substring(8, 10)<= 8) {
        week1ids.push(completedThisMonth[i][1][j].ID);
      } else if(+completedThisMonth[i][0].substring(8, 10) >=9 && +completedThisMonth[i][0].substring(8, 10)<= 15) {
        week2ids.push(completedThisMonth[i][1][j].ID);
      } else if(+completedThisMonth[i][0].substring(8, 10) >=16 && +completedThisMonth[i][0].substring(8, 10)<= 23) {
        week3ids.push(completedThisMonth[i][1][j].ID);
      } else if(+completedThisMonth[i][0].substring(8, 10) >=24 && +completedThisMonth[i][0].substring(8, 10)<= 31) {
        week4ids.push(completedThisMonth[i][1][j].ID);
      }
    }
  }
  return [
    IdsToTypeArray(week1ids, data),
    IdsToTypeArray(week2ids, data),
    IdsToTypeArray(week3ids, data),
    IdsToTypeArray(week4ids, data)  
    ]
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
// Dotts{
  // "2021-09-04":{physCompleteDot: true, mentCompleteDot: false, intCompleteDot: true}
    // "2021-09-05":{physCompleteDot: false, mentCompleteDot: true, intCompleteDot: true}
    // "2021-09-06":{physCompleteDot: true, mentCompleteDot: false, intCompleteDot: false}
// }

function DotSetter(id, data) {
  let type = id.type
  if(!data.Dotts){
    data.Dotts = {physCompleteDot: false, mentCompleteDot: false, intaCompleteDot: false}
  }

  switch (type) {
    case "P" : data.Dotts[currentDate].physCompleteDot = HasCompletedAllOfTypeOnDay(type, currentDate, data)
    break;
    case "M" : data.Dotts[currentDate].mentCompleteDot = HasCompletedAllOfTypeOnDay(type, currentDate, data)
    break;
    case "I" : data.Dotts[currentDate].intaCompleteDot = HasCompletedAllOfTypeOnDay(type, currentDate, data)
    break;
  }
  
}

export async function MarkHabitCompleted(id, cb){
  let data = await readDB()
  let currentDate = GetCurrentDate()
  let currentTime = GetTimeOfDay()
  //get type from ID
  //call HasCompletedAllOfTypeOnDay(type, date)
  //put data as value AllOfTypeCompleted:
  //OR//
  //check if all habits of type have been completed
  if(!data.Completed_Bits){
    data.Completed_Bits = {}
  }
  
  if(data.Completed_Bits[currentDate]) {
    data.Completed_Bits[currentDate].push({"ID": id, "Time": currentTime})
  }
  else {
    data.Completed_Bits[currentDate] = [{"ID": id, "Time": currentTime}]
  }
  DotSetter(id, data)
  await writeDB(data)
  cb(Math.random())
}

export async function UndoHabitCompleted(id, cb){
  let data = await readDB()
  let currentDate = GetCurrentDate()
  data.Completed_Bits[currentDate]= data.Completed_Bits[currentDate].filter((E) => E.ID != id)
  DotSetter(id)  
  await writeDB(data)
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

export function GetCompletedIDS(list) {
  return list.map((E) => E.ID)
}

export function GetCompletedTime(list, id) {
  return list.filter(day).map((E) => E.ID)
}

export async function HasCompletedAllOfTypeOnDay(type, date, data) {
  let doneIDS = GetCompletedIDS(data["Completed_Bits"][date])
  let completedHabitOfTypeList = []
  let todayScheduledHabitIDS = Object.values(data.Habits).filter((H) => H.Type == type).filter((H) => IsTodayHabit(H)).filter((H) => H.Deleted == false).map((H) => H.ID)

  for(let i=0; i<doneIDS.length; i++){
    for(let j=0;j<todayScheduledHabitIDS.length;j++){
      if(doneIDS[i] == todayScheduledHabitIDS[j]) completedHabitOfTypeList.push(doneIDS[i])
    }
  }
  if(completedHabitOfTypeList.length == 0) 
    return false
  if(completedHabitOfTypeList.sort().toString() == todayScheduledHabitIDS.sort().toString()){
    return true
  } else return false
}

export async function ConvertCalendarData(cb){
  let data = await readDB()
  let ret = {}
  let dates = Object.keys(data["Dotts"])
  console.log(dates)
  for(let i=0; i<dates.length; i++) {
    let date = dates[i]
    let showDots = []
    if (data.Dotts[date].physCompleteDot) {
      showDots.push({key: 'Physical', color: '#ff7160'}) }
    if (data.Dotts[date].mentCompleteDot) {
      showDots.push({key: 'Mental', color: '#4bfffb'}) }
    if (data.Dotts[date].intaCompleteDot){
      showDots.push({key: 'Input', color: '#c8ff13'}) }
    ret[date] = {'dots': showDots}
  }
  cb(Math.random())
  return ret
}