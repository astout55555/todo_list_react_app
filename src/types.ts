export interface TodoType {
  id: number,
  title: string,
  completed: boolean,
  day?: string,
  month?: string
  year?: string,
  description?: string
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
type ToggleCompleteType = (todo: TodoType) => Promise<TodoType>;
type SendUpdatesType = (updateData: TodoType) => Promise<TodoType>;
type RemoveTodoType = (id: number) => Promise<void>;
type CreateTodoType = (newTodoData: NewTodo) => Promise<void>;
type SetModalVisibleType = React.Dispatch<React.SetStateAction<boolean>>;

export interface TodoListProps {
  allTodos: TodoType[],
  toggleComplete: ToggleCompleteType,
  removeTodo: RemoveTodoType,
  setCurrentTodo: SetCurrentTodoType,
}

export interface TodoProps {
  todo: TodoType,
  toggleComplete: ToggleCompleteType,
  removeTodo: RemoveTodoType,
  setCurrentTodo: SetCurrentTodoType,
}

export interface ModalProps {
  currentTodo: CurrentTodo,
  setCurrentTodo: SetCurrentTodoType,
  modalVisible: boolean,
  setModalVisible: SetModalVisibleType,
  createTodo: CreateTodoType,
  toggleComplete: ToggleCompleteType,
  sendUpdates: SendUpdatesType,
}

export type ModalFormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
