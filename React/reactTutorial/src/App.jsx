import { useState } from 'react'
import styled from "styled-components";
import { useDispatch ,useSelector } from "react-redux";
// import {todoSlice} from "./Redux/Modules/todoSlice";
import {addTask, deleteTask, updateTask } from "./Redux/Modules/todoSlice";
import './App.css'

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;
const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
const StTodo = styled.div`
  border: 1px solid #ddd;
  width: 30%;
  height: 180px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 12px;
`;

function App() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const task = useSelector((state) => state.taskReducer.task);
    const dispatch = useDispatch();
const onSubmitHandler = (e) => {
  e.preventDefault();
  if (title === "" || body === "") return;

  dispatch(addTask({
    id: task.length + 1,
    title,
    body,
    isDone: false,
  }));

  setTitle("");
  setBody("");
};
const handleDelete = (id) => {
  dispatch(deleteTask(id));
};

const handleUpdate = (task) => {
  const newTitle = prompt("Enter new title", task.title);
  const newBody = prompt("Enter new body", task.body);
  if (newTitle && newBody) {
    dispatch(updateTask({
      id: task.id,
      title: newTitle,
      body: newBody
    }));
  }
};
  return (
    <>
    <StFormContainer>
      <form onSubmit={onSubmitHandler}>
        <label>Todos Title:</label>
        <StInput
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
         <label>Todos Body:</label>
         <StInput
          type="text"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <StButton>ADD</StButton>
      </form>
    </StFormContainer>
    <StTodos>
      {task.map((curTask) => (
    <StTodo key={curTask.id}>
      <div>
        <p>ID: {curTask.id}</p>
        <h4>Task Title: {curTask.title}</h4>
        <p>Task: {curTask.body}</p>
         <StButton onClick={() => handleDelete(curTask.id)}>Delete</StButton>
        <StButton onClick={() => handleUpdate(curTask)}>Update</StButton>
      </div>
    </StTodo>
  ))}
    </StTodos>
    </>
  )
}

export default App
