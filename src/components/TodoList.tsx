import Todo from './Todo';
import {
  TodoType,
  TodoListProps,
} from '../types';

const TodoList = ({allTodos, toggleComplete}: TodoListProps) => {
  const sortByCompletion = (todos: TodoType[]) => {
    const sortedTodos = todos; // implement sort here
    return sortedTodos;
  }

  const fullList = () => {
    return sortByCompletion(allTodos).map(todo => {
      return (
        <tr key={todo.id} data-id={todo.id} >
          <Todo todo={todo} toggleComplete={toggleComplete} />
        </tr>
      );
    });
  }

  return (
    <>
      {fullList()}
    </>
  );
}

export default TodoList;
