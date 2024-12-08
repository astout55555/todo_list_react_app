export interface TodoType {
  id: number,
  title: string,
  completed: boolean,
  day: string,
  month: string
  year: string,
  description: string
}

export interface TodoListProps {
  allTodos: TodoType[],
  toggleComplete: (todo: TodoType) => Promise<TodoType>,
}

export interface TodoProps {
  todo: TodoType,
  toggleComplete: (todo: TodoType) => Promise<TodoType>,
}
