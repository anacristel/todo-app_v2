import React, { useState } from "react";

import { Container, Typography } from '@mui/material';
import './App.css';
import TodoList from './components/todoList';
import TodoItem from './components/todoItem';

function App() {
  const [list, setList] = useState([]);





  const handleAddItem = addItem => {
    setList([...list, addItem]);
  };
  return (
    <div className="App">
      <Container
        sx={{
          bgcolor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '700px',
          padding: '2rem',
        }}
        style={{borderRadius: 20}}  >
        <Typography fontSize={40}>LISTA DE TAREAS</Typography>
        <TodoList handleAddItem={handleAddItem}></TodoList>
        <TodoItem list={list} setList={setList}></TodoItem>
      </Container>
    </div>
  );
}

export default App;
