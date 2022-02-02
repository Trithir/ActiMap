import RNCalendarEvents from "react-native-calendar-events";

export async function RemoveEvent(eventId) {
  
  RNCalendarEvents.removeEvent(eventId)

  }