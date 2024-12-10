import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Modal from './components/Modal';
import todosService from './services/todos';
import {
  CurrentTodo,
  NewTodo,
  TodoType
} from './types';

function App() {
  const [allTodos, setAllTodos] = useState<TodoType[]>();
  const [currentTodo, setCurrentTodo] = useState<CurrentTodo>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    todosService.getAllTodos()
      .then(todos => {setAllTodos(todos)})
      .catch((error: unknown) => {console.error(error)}
    );
  }, []);

  if (!allTodos) {
    return null;
  }

  // const findByID = (todoID: number) => {
  //   return allTodos.find(todo => todo.id === todoID);
  // }

  const toggleComplete = async (todo: TodoType) => {
    try {
      const updatedTodo = await todosService.updateTodo({...todo, completed: !todo.completed});
      const nonUpdatedTodos = allTodos.filter(todo => todo.id !== updatedTodo.id);
      setAllTodos([...nonUpdatedTodos, updatedTodo]);
      return updatedTodo;
    } catch (error) {
      console.error(error);
      throw new Error('Update failed');
    }
  }

  const removeTodo = async (todoID: number): Promise<void> => {
    try {
      await todosService.deleteTodo(todoID);
      setAllTodos(allTodos.filter(todo => todo.id !== todoID));
    } catch (error) {
      console.error(error);
      throw new Error('Deletion failed');
    }
  }

  const createTodo = async (newTodoData: NewTodo) => {
    try {
      const addedTodo = await todosService.addTodo(newTodoData);
      setAllTodos([...allTodos, addedTodo]);
    } catch (error) {
      console.error(error);
      throw new Error('Todo creation failed');
    }
  }

  const handleClickAdd = () => {
    setModalVisible(true);
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
          <label htmlFor="new_item" onClick={handleClickAdd} >
            <img src="images/plus.png" alt="Add Todo Item" />
            <h2>Add new to do</h2>
          </label>
          <table cellSpacing="0">
            <tbody>
              <TodoList allTodos={allTodos} toggleComplete={toggleComplete}
                removeTodo={removeTodo} setCurrentTodo={setCurrentTodo} />
            </tbody>
          </table>
          <Modal currentTodo={currentTodo} setCurrentTodo={setCurrentTodo}
            modalVisible={modalVisible} setModalVisible={setModalVisible}
            createTodo={createTodo} />
        </main>
      </div>
  )
}

export default App;
