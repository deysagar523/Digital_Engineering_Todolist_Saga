import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  fetchTodo,
  updateTodo,
} from "../Redux/ActionFunctions/TodoActionFunctions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
// import { Button, Modal, Form } from "react-bootstrap";

const TodoComp = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [todo, setTodo] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedTodo, setEditedTodo] = useState({});
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodoId = Math.max(...todos.map((todo) => todo.id));
    var newTodo = {
      id: newTodoId + 1,
      title: todo,
    };
    setTodo("");
    dispatch(addTodo(newTodo));
  };

  const handleOpenEditModal = (todoData) => {
    setEditedTodo({
      ...todoData,
    });
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditedTodo({});
    setEditModalOpen(false);
  };

  const handleUpdateTodo = () => {
    dispatch(updateTodo(editedTodo));
    handleCloseEditModal();
  };

  const handleDelete = (e, todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <>
      <div>Todo Component</div>
      <form onSubmit={(e) => handleAddTodo(e)}>
        <input
          type="text"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.length !== 0
          ? todos.map((todo) => {
              return (
                <li key={todo.id}>
                  {todo.title}.{todo.id}
                  <Button onClick={() => handleOpenEditModal(todo)}>
                    Update
                  </Button>
                  <Button onClick={(e) => handleDelete(e, todo.id)}>
                    Delete
                  </Button>
                </li>
              );
            })
          : []}
      </ul>
      {/* <Modal
        show={editModalOpen}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "9999",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "20px",
        }}
      >
        <Modal.Header>
          <Modal.Title>Update Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Name:</label>
            <div>
              <input
                type="text"
                value={editedTodo.title || ""}
                onChange={(e) =>
                  setEditedTodo({
                    ...editedTodo,
                    title: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateTodo}>
            Update
          </Button>
        </Modal.Footer>
      </Modal> */}
      <Modal
        open={editModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onBackdropClick={handleCloseEditModal}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            fontFamily="times-roman"
            variant="h5"
            component="h2"
          >
            Edit Task:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form>
              <TextField
                id="outlined-controlled"
                label="Title"
                value={editedTodo.title}
                autoFocus
                margin="dense"
                type="text"
                autoComplete="off"
                onChange={(e) =>
                    setEditedTodo({
                      ...editedTodo,
                      title: e.target.value,
                    })
                  }
                fullWidth
              ></TextField>
              <Button
                type="submit"
                color="primary"
                onClick={handleUpdateTodo}
              >
                Save
              </Button>
              <Button
                onClick={handleCloseEditModal}
                color="primary"
              >
                Close
              </Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default TodoComp;
