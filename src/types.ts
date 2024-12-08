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
}

export interface TodoProps {
  todo: TodoType,
}
