import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import todosService from './services/todos';
import {
  TodoType
} from './types';

function App() {
  const [allTodos, setAllTodos] = useState<TodoType[]>();

  useEffect(() => {
    todosService.getAllTodos()
      .then(todos => {setAllTodos(todos)})
      .catch((error: unknown) => {console.error(error)}
    );
  }, []);

  if (!allTodos) {
    return null;
  }

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

export default App;
