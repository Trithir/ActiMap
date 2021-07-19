import React from "react";

function handleChange(props) {
  
}

function TodoForm(props) {
  const [newTodo, setNewTodo] = useState('')

  return (
    <form>
      <input 
        type='text' 
        placeholder='Add todo'
        value= />
      <input type='submit' value='submit' />
    </form>
  );
}

export default TodoForm;