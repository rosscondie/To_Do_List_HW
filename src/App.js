import './App.css';
import React, {useState} from 'react';

function App() {
  const [todos, setTodos] = useState([
    { name: "Buy shopping", priority: "high" }, 
    { name: "Clean bathroom", priority: "low" }, 
    { name: "Car's MOT", priority: "high" }, 
  ]);
  const [newItemName, setNewItemName] = useState("");

  function saveNewItem(event) {
    event.preventDefault();
    const newItem = {
      name: newItemName,
      priority: "low",
    }
    const newItems = [...todos, newItem];
    setTodos(newItems);
    setNewItemName("");

  }

  function handleInputChange(event) {
    setNewItemName(event.target.value)
  }

  const todoNodes = todos.map((todo, index) => {
    return <li key={index}>
      <span>{todo.name}</span>
    </li>
  });

  return (
    <div className="App">
      <h1>ToDo's</h1>
      <form onSubmit={saveNewItem}>
        <label></label>
        <input type="text" value={newItemName} onChange={handleInputChange}/>
        <input type="submit" value="Save Item" />
      </form>
      <ul>
       {todoNodes}
      </ul>
    </div>
  );
}

export default App;
