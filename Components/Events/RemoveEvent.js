import RNCalendarEvents from "react-native-calendar-events";
import { FetchEventIdFromDb } from "../DataFunctions";

export async function RemoveEvent() {
  console.log(await FetchEventIdFromDb())
  RNCalendarEvents.removeEvent(await FetchEventIdFromDb())
}