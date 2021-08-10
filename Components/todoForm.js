import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";

// function handleChange(props) {
  
// }

// function TodoForm(props) {
//   const [newTodo, setNewTodo] = useState('')

//   return (
//     <form>
//       <input 
//         type='text' 
//         placeholder='Add todo'
//         value= ''
//       />
//       <input 
//         type='submit' 
//         value='submit' 
//       />
//     </form>
//   );
// }

// export default TodoForm;



const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);
  // const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="Add TODO"
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={styles.text}>{text}</Text>
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    alignItems: 'center',
  }
});

export default UselessTextInput;