const data = require('./fake.json')
const fs = require('fs');

function GetHabit(id) {
  return (
    data.Habits[id]
  );
}

function WriteToDatabase() {
  fs.writeFile('./fake.json', JSON.stringify(data), err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })
}

function ShowApplicableHabit(type) {
  //match habits to be displayed for type. 
  //Called in Physical/Mental/Intake to set buttons
}

function CreateHabit(habit) {
  //set id.....Habits.length + 1
    //<HabitModal /> data
    //set Deleted: false
    //set Creation_Date
    //WriteToDatabase()
}

function MarkHabitCompleted(date, id){
  //add to completed dates
}

function UndoHabitCompleted(date, id){
  //remove ID from completed date
}

function ConvertCalendarData(){
  //completed bits to calendar format
}

//TESTS//
let  habit = GetHabit(1)
console.log(habit)
habit.Frequency = 3
console.log(GetHabit(1))
WriteToDatabase()

module.exports = {GetHabit}