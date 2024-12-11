import { useState } from 'react';
import {
  TodoType,
  TodoProps,
} from '../types';

const Todo = ({todo, toggleComplete, removeTodo, setCurrentTodo}: TodoProps) => {
  const [checked, setChecked] = useState(todo.completed);

  const dueDate = (todo: TodoType) => {
    if (todo.month !== '' && todo.year !== '') {
      return `${todo.month}/${todo.year.slice(2)}`;
    } else {
      return 'No Due Date';
    }
  }

  const todoID = (todo: TodoType) => {
    return `item_${todo.id.toString()}`;
  }

  const handleDelete = (event: React.MouseEvent<HTMLTableCellElement>) => {
    event.stopPropagation();
    removeTodo(todo.id)
      .catch((error: unknown) => {console.error(error)});
  }

  const handleItemClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    event.preventDefault();

    if (event.target instanceof HTMLLabelElement) {
      setCurrentTodo(todo);
    } else {
      toggleComplete(todo)
        .then(updatedTodo => {
          setChecked(updatedTodo.completed);
        })
        .catch((error: unknown) => {console.error(error)});
    }
  }

  return (
    <>
      <td className="list_item" onClick={handleItemClick}>
        <input type="checkbox" name={todoID(todo)} id={todoID(todo)}
          checked={checked} 
          onChange={() => {setChecked(!checked)}}
          />
        <span className="check"></span>
        <label htmlFor={todoID(todo)}>
          {todo.title} - {dueDate(todo)}
        </label>
      </td>
      <td className="delete" onClick={handleDelete}>
        <img src="images/trash.png" alt="Delete"/>
      </td>
    </>
  )
}

export default Todo;