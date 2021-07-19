import React from "react";

// List of items, will use state variable
const todos = ["Finish homework", "Wash dishes", "Clean room", "Make waffles"];


const Todo = props =><li>{props.todo}</li>;

// Map over list items
const TodoList = () => <ul>
  {todos.map(todo => (
    <Todo todo={todo} key={todo} />
  ))}
</ul>;

// Export to call elsewhere
export default TodoList;