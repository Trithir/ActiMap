import RNCalendarEvents from "react-native-calendar-events";

export async function SaveEvent() {
  console.log("saveEvent Start")
  let eventTitle = 'TriHabits'
  let startDate = new Date().toISOString()
  let frequency = 'daily'
  let primaryCalendarId = undefined
  let calendars = await RNCalendarEvents.findCalendars()
  for (let i = 0; i < calendars.length; i++) {
    // check isPrimary
    if (calendars[i].isPrimary) primaryCalendarId = calendars[i].id
    console.log(primaryCalendarId)
  }
  // find primary calendar then get id of primary
  return RNCalendarEvents.saveEvent(
    eventTitle , 
    {
      startDate: startDate,
      calendarId: primaryCalendarId,
      recurrenceRule: {
      frequency: frequency, 
      occurrence: 365,
      },
    }, 
    // {
    // sync: true,
    // }
  ) 
  }

  // [
  //   {
  //     "allowedAvailabilities": [
  //       "busy",
  //       "free"
  //     ],
  //     "allowsModifications": false,
  //     "color": "#16A765",
  //     "id": "1",
  //     "isPrimary": false,
  //     "source": "ericstevens10@gmail.com",
  //     "title": "Holidays in United States",
  //     "type": "com.google"
  //   },
  //   {
  //     "allowedAvailabilities": [
  //       "busy",
  //       "free"
  //     ],
  //     "allowsModifications": false,
  //     "color": "#92E1C0",
  //     "id": "2",
  //     "isPrimary": false,
  //     "source": "ericstevens10@gmail.com",
  //     "title": "Birthdays",
  //     "type": "com.google"
  //   },
  //   {
  //     "allowedAvailabilities": [
  //       "busy",
  //       "free"
  //     ],
  //     "allowsModifications": true,
  //     "color": "#9FC6E7",
  //     "id": "3",
  //     "isPrimary": true,
  //     "source": "ericstevens10@gmail.com",
  //     "title": "ericstevens10@gmail.com",
  //     "type": "com.google"
  //   }
  // ]