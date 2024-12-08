import axios from 'axios';

import {
  TodoType,
} from '../types';

const baseURL = 'http://localhost:3000/api/todos';

const getAllTodos = async () => {
  const response = await axios.get<TodoType[]>(baseURL);
  return response.data;
}

export default {
  getAllTodos,
}