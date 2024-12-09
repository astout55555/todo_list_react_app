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

export interface TodoListProps {
  allTodos: TodoType[],
  toggleComplete: (todo: TodoType) => Promise<TodoType>,
  removeTodo: (id: number) => Promise<void>,
}

export interface TodoProps {
  todo: TodoType,
  toggleComplete: (todo: TodoType) => Promise<TodoType>,
  removeTodo: (id: number) => Promise<void>,
}

export interface NewModalFormProps {
  createTodo: (newTodoData: NewTodo) => Promise<void>,
  // later: accept function from Modal for handling "complete" button
}

export interface ModalProps {
  currentTodo: CurrentTodo,
  setCurrentTodo: React.Dispatch<React.SetStateAction<CurrentTodo>>,
  modalVisible: boolean,
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  createTodo: (newTodoData: NewTodo) => Promise<void>,
}
