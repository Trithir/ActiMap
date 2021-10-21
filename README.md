# TriHabits
Set simple habits to enhance well-being!


Brief breakdown of functionality and features:

Using React Native and Local Stoage, this app lets you set up three lists of pressable buttons that save info to a local storage object database(LSOD). 

There is a calendar component that pulls info from the LSOD to display dots that correlate to which buttons were pressed on a specific day. 

The buttons and calendar onPress functions open separate modals.

The button press modal contains two sets of buttons(set of 3, set of 7) with useEffects, and two text input fields.
  Button presses set state (in this case the type of Habit, and the days of the week you want the habit displayed)
  Input fields set state for a Name and Comment.
  All of this modal is saved as an object in local storage, and if it's new, more info will be added.

The calendar press modal will open for a specific day and contains a list of buttons pressed on the date selected and a chart that displays the total of each type of button pressed.
  Both of these react components pull their own information from the LSOD to display. 

## Development
`npm start`

Open the Expo Go app on Android phone and scan QR code.  If you have trouble connecting, make sure you are on the same wifi network as computer.

## Resources
* https://reactnative.dev/docs/environment-setup
* React Google Maps API
  * https://github.com/JustFly1984/react-google-maps-api/tree/master/packages/react-google-maps-api
  * https://react-google-maps-api-docs.netlify.app/
