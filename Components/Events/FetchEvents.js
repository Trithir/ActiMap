import RNCalendarEvents from "react-native-calendar-events";

export async function FetchEvents() {
console.log(RNCalendarEvents.fetchAllEvents('2022-01-07T06:00:00.000Z', '2022-01-08T06:00:00.000Z'));
}