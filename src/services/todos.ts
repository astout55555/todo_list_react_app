import axios from 'axios';

import {
  Todo
} from '../types';

const baseURL = 'http://localhost:3000/api/todos';

const getAllTodos = async () => {
  const response = await axios.get<Todo[]>(baseURL);
  return response.data;
}

export default {
  getAllTodos,
}