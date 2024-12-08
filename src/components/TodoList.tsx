import Todo from './Todo';

const TodoList = ({allTodos}) => {
  const sortByCompletion = (todos) => {
    const sortedTodos = todos; // implement sort here
    return sortedTodos;
  }

  const fullList = () => {
    return sortByCompletion(allTodos).map(todo => {
      return (
        <Todo todo={todo} />
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
