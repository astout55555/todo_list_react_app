import {
  TodoType,
  TodoProps,
} from '../types';

const Todo = ({todo}: TodoProps) => {
  console.log(todo);

  const isChecked = (todo: TodoType) => {
    return todo.completed;
  } // need to add onChange handler to modify checked attribute & completion status

  const dueDate = (todo: TodoType) => {
    if (todo.month !== '' && todo.year !== '') {
      return `${todo.month}/${todo.year}` // format day & year later
    } else {
      return 'No due date';
    }
  }

  const todoID = (todo: TodoType) => {
    return `item_${todo.id.toString()}`;
  }

  return (
    <>
      <td className="list_item">
        <input type="checkbox" name={todoID(todo)} id={todoID(todo)} checked={isChecked(todo)} />
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