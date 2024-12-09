import {
  AxiosResponse,
} from 'axios';

export interface TodoType {
  id: number,
  title: string,
  completed: boolean,
  day: string,
  month: string
  year: string,
  description: string
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

export interface ModalProps {
  currentTodo: CurrentTodo,
  modalVisible: boolean,
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

export interface DeleteResponse extends AxiosResponse {
  status: 204 | 404,
  statusText: 'No Content' | 'The todo could not be found.',
}
