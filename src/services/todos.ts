import axios from 'axios';

import {
  DeleteResponse,
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
  const response = await axios.delete(`${baseURL}/${todoID}`);
  return response as DeleteResponse;
}

export default {
  getAllTodos,
  updateTodo,
  deleteTodo,
}