import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "./checkbox";
import IconButton from "@mui/material/IconButton";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Button, Grid } from "@mui/material";

const TodoItem = (props) => {
  const { list, setList } = props;

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;

    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };

  const onClickRemoveItem = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };

  const chk = list.map((item) => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));

  return (
    <Grid display={"flex"} flexDirection={"column"}>
      <List sx={{ padding: 3 }}>
        {list.length ? chk : "¡¡ Yupi !! No hay ninguna tarea por hacer"}
        {list.length ? (
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CiEdit />
              </IconButton>
            }
          ></ListItem>
        ) : null}
      </List>
      <Button
        startIcon={<MdDelete />}
        variant="contained"
        onClick={onClickRemoveItem}
      >
        Eliminar tareas marcadas
      </Button>
    </Grid>
  );
};
export default TodoItem;
