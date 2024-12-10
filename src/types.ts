export type ModalFormQueryReturn = null | HTMLFormElement;

export interface TodoType {
  id: number,
  title: string,
  completed: boolean,
  day: string,
  month: string
  year: string,
  description: string
}

export interface NewTodo {
  title: string,
  day?: string,
  month?: string
  year?: string,
  description?: string
}

export type CurrentTodo = TodoType | null;

type SetCurrentTodoType = React.Dispatch<React.SetStateAction<CurrentTodo>>;

export interface TodoListProps {
  allTodos: TodoType[],
  toggleComplete: (todo: TodoType) => Promise<TodoType>,
  removeTodo: (id: number) => Promise<void>,
  setCurrentTodo: SetCurrentTodoType,
}

export interface TodoProps {
  todo: TodoType,
  toggleComplete: (todo: TodoType) => Promise<TodoType>,
  removeTodo: (id: number) => Promise<void>,
  setCurrentTodo: SetCurrentTodoType,
}

export interface ModalProps {
  currentTodo: CurrentTodo,
  setCurrentTodo: SetCurrentTodoType,
  modalVisible: boolean,
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  createTodo: (newTodoData: NewTodo) => Promise<void>,
}
