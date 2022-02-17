import RNCalendarEvents from "react-native-calendar-events";

export async function SaveEvent() {
  console.log("saveEvent Start")
  let eventTitle = 'TriHabits'
  let startDate = '2022-02-16T01:00:00.000Z'
  let frequency = 'daily'

  return RNCalendarEvents.saveEvent(
    eventTitle , 
    {
      startDate: startDate,
      // calendarId: '3',
      recurrenceRule: {
      frequency: frequency, 
      occurrence: 365,
      },
    }, 
    {
    sync: true,
    }
  ) 
  }