import axios from 'axios';

import {
  NewTodo,
  TodoType,
} from '../types';

const baseURL = 'http://localhost:3000/api/todos';

const getAllTodos = async () => {
  const response = await axios.get<TodoType[]>(baseURL);
  return response.data;
}

const updateTodo = async (updateData: TodoType) => {
  const todoID = updateData.id.toString();
  const response = await axios.put<TodoType>(`${baseURL}/${todoID}`, updateData);
  return response.data;
}

const deleteTodo = async (id: number) => {
  const todoID = id.toString();
  const response = await axios.delete<''>(`${baseURL}/${todoID}`);
  return response;
}

const addTodo = async (todoInfo: NewTodo) => {
  const response = await axios.post<TodoType>(baseURL, todoInfo);
  return response.data;
}

export default {
  getAllTodos,
  updateTodo,
  deleteTodo,
  addTodo,
}