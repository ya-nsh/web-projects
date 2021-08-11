import './App.css';
import db from './firebase';
import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Upon loading, this will load all todos from firebase
  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo));
    });
  }, []);

  const submitVal = e => {
    e.preventDefault();

    //adding todos to firebase
    db.collection('todos').add({ todo: input.trim() });

    // setTodos([...todos, input.trim()]);

    setInput('');
  };

  return (
    <div className="App">
      <h1>Hello</h1>

      <form>
        <FormControl>
          <InputLabel>Enter a todo item</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
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
      </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
