import axios from 'axios';

const baseURL = 'http://localhost:3000/api/todos';

const getAllTodos = async () => {
  const response = await axios.get(baseURL);
  const todos = await response.data;
  return todos;
}

export default {
  getAllTodos,
}