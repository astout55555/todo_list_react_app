import { useState } from 'react';
import {
  TodoType,
  TodoProps,
} from '../types';

const Todo = ({todo, toggleComplete}: TodoProps) => {
  const [checked, setChecked] = useState(todo.completed);

  // const isChecked = (todo: TodoType) => {
  //   return todo.completed;
  // } // need to add onChange handler to modify checked attribute & completion status

  const handleCheck = () => {
    console.log('todo before update: ', todo.completed);
    toggleComplete(todo)
      .then(updatedTodo => {
        console.log('updatedTodo completed: ', updatedTodo.completed);
        setChecked(updatedTodo.completed);
      })
      .catch((error: unknown) => {console.error(error)});
  }

  const dueDate = (todo: TodoType) => {
    if (todo.month !== '' && todo.year !== '') {
      return `${todo.month}/${todo.year}` // format day & year later
    } else {
      return 'No Due Date';
    }
  }

  const todoID = (todo: TodoType) => {
    return `item_${todo.id.toString()}`;
  }

  return (
    <>
      <td className="list_item">
        <input type="checkbox" name={todoID(todo)} id={todoID(todo)}
          checked={checked} onChange={handleCheck} />
        <span className="check"></span>
        <label htmlFor={todoID(todo)}>{todo.title} - {dueDate(todo)}</label>
      </td>
      <td className="delete">
        <img src="images/trash.png" alt="Delete"/>
      </td>
    </>
  )
}

export default Todo;