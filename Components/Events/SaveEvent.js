import RNCalendarEvents from "react-native-calendar-events";

export async function SaveEvent() {
  let eventTitle = 'TriHabits'
  let startDate = '2022-01-07T06:00:00.000Z'
  let frequency = 'daily'

  RNCalendarEvents.saveEvent(
    eventTitle , 
    {
      id: "TriHabits",
      startDate: startDate,
      // notes: 'You Rock!'
      // recurrenceRule: {
      // frequency: frequency, 
      // occurrence: 5,
      // },
    }, 
    {
    sync: true,
    }
  ) 
  }