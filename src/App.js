import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography } from '@mui/material';
import './App.css';
import TodoList from './components/todoList';
import TodoItem from './components/todoItem';

function App() {
  const [list, setList] = useState([]);
  const [actualizar, setActualizar] = useState(false);

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/tareas/');
        setList(response.data)
      } catch (error) {
        console.error('Error fetching the tareas:', error);
      }
    };
    fetchTareas();
  }, []);

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
        style={{ borderRadius: 20 }}  >
        <Typography fontSize={40}>LISTA DE TAREAS</Typography>
        <TodoList handleAddItem={handleAddItem} actualizar={actualizar} setActualizar={setActualizar}></TodoList>
        <TodoItem list={list} setList={setList}></TodoItem>
      </Container>
    </div>
  );
}

export default App;
