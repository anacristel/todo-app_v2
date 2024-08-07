import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";

const TodoList = (props) => {
  const { handleAddItem, actualizar, setActualizar } = props;
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      description: description,
    };
    try {
      const response = await axios.post('http://localhost:8000/api/tareas/', data);
      setActualizar(prev => !prev );
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <Grid display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography fontSize={20}>Agregar tarea</Typography>
      <Grid display={"flex"} paddingTop={2}>
        <TextField
          label="¿Qué hay que hacer?"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></TextField>
        <Button
          variant="outlined"
          size="small"
          disabled={description ? "" : "disabled"}
          onClick={handleSubmit}
        >
          Agregar
        </Button>
      </Grid>
    </Grid>
  );
};
export default TodoList;
