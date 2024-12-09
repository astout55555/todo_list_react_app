import { useState } from 'react';
import {
  TodoType,
  TodoProps,
} from '../types';

const Todo = ({todo, toggleComplete}: TodoProps) => {
  const [checked, setChecked] = useState(todo.completed);

  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    event.stopPropagation(); // reduces duplicate PUT requests, consumes event
    toggleComplete(todo)
      .then(updatedTodo => {
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
      <td className="list_item" onClick={handleClick} >
        <input type="checkbox" name={todoID(todo)} id={todoID(todo)}
          checked={checked} 
          onChange={() => {setChecked(!checked)}}
          />
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