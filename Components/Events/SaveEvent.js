import RNCalendarEvents from "react-native-calendar-events";

console.log(await RNCalendarEvents.removeEvent('Title Of Event'))

// async function saveEvent(habitName, startDate, frequency) {

//   await RNCalendarEvents.removeEvent('Title Of Event')

//   RNCalendarEvents.saveEvent(
//     habitName , 
//     {
//     startDate: startDate '2016-08-19T09:30:00.000Z',
//     notes: 'You Rock!'
//     }, 
//     {
//     frequency: frequency 'daily',
//     }
//   ) 
//   }