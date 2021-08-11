import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    'Finish Assignment',
    'Create a grocery list',
    'Work on the project'
  ]);

  const [input, setInput] = useState('');

  const submitVal = (e) => {
    e.preventDefault();
    console.log(input);
    const todo = input.trim();
    if (todo) {
      setTodos([...todos, todo]);
      console.log(todos);
    }
  };

  return (
    <div className="App">
      <h1>Hello</h1>

      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={submitVal}>
          Add todo
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
