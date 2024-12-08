import Todo from './Todo';

const TodoList = ({allTodos}) => {
  const sortByCompletion = (todos) => {
    const sortedTodos = todos; // implement sort here
    return sortedTodos;
  }

  const fullList = () => {
    return sortByCompletion(allTodos).map(todo => {
      return (
        <tr key={todo.id} data-id={todo.id} >
          <Todo todo={todo} />
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
