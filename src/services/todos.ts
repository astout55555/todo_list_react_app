import axios from 'axios';

import {
  toTodo,
  toTodoArray,
} from '../utils';

import {
  NewTodo,
  TodoType,
} from '../types';

const baseURL = 'http://localhost:3000/api/todos';

const getAllTodos = async () => {
  const response = await axios.get(baseURL);
  return toTodoArray(response.data);
}

const updateTodo = async (updateData: TodoType) => {
  const todoID = updateData.id.toString();
  const response = await axios.put(`${baseURL}/${todoID}`, updateData);
  return toTodo(response.data);
}

const deleteTodo = async (id: number): Promise<void> => {
  const todoID = id.toString();
  await axios.delete(`${baseURL}/${todoID}`);
}

const addTodo = async (todoInfo: NewTodo) => {
  const response = await axios.post(baseURL, todoInfo);
  return toTodo(response.data);
}

export default {
  getAllTodos,
  updateTodo,
  deleteTodo,
  addTodo,
}