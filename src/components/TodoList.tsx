import Todo from './Todo';
import {
  TodoType,
  TodoListProps,
} from '../types';

const TodoList = ({allTodos, toggleComplete, removeTodo, setCurrentTodo}: TodoListProps) => {
  const toSortedByCompletion = (todos: TodoType[]) => {
    return [...todos].sort((todoA: TodoType, todoB: TodoType): number => {
      if (todoA.completed && !todoB.completed) {
        return 1;
      } else if (!todoA.completed && todoB.completed) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  const fullList = () => {
    return toSortedByCompletion(allTodos).map(todo => {
      return (
        <tr key={todo.id} data-id={todo.id} >
          <Todo todo={todo} toggleComplete={toggleComplete}
            removeTodo={removeTodo} setCurrentTodo={setCurrentTodo} />
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
