import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { addTask } from "../api";

const TodoList = (props) => {
  const { handleAddItem, fetchData } = props;
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTask(description);
      await fetchData();
    } catch (error) {}
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
