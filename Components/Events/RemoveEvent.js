import RNCalendarEvents from "react-native-calendar-events";

export async function RemoveEvent() {
  let eventID = 'TriHabits'
  let frequency = 'daily'
  
  RNCalendarEvents.removeEvent(eventID, {sync: true})

  }