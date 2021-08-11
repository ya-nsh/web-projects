import './App.css';
import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';

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

    setTodos([...todos, todo]);
    console.log(todos);

    setInput('');
  };

  return (
    <div className="App">
      <h1>Hello</h1>

      <form>
        <FormControl>
          <InputLabel>Enter a todo item</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>

        <Button
          type="submit"
          disabled={input.trim() ? false : true}
          onClick={submitVal}
          variant="contained"
          color="primary"
          style={{
            margin: '20px',
            borderRadius: '10px',
            fontSize: '1rem'
          }}
        >
          Add todo
        </Button>
        {/* <button type="submit" onClick={submitVal}>
          Add todo
        </button> */}
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
