import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/TodoList';
import todosService from './services/todos';

function App() {
  const [allTodos, setAllTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const todos = await todosService.getAllTodos();
      setAllTodos(todos);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
      <div id="items" >
        <header>
          <dl>
            <dt>All Todos</dt>
            <dd>{allTodos.length}</dd>
          </dl>
        </header>
        <main>
          <label htmlFor="new_item">
            <img src="images/plus.png" alt="Add Todo Item" />
            <h2>Add new to do</h2>
          </label>
          <table cellSpacing="0">
            <tbody>
              <TodoList allTodos={allTodos} />
            </tbody>
          </table>
        </main>
      </div>
  )
}

export default App
