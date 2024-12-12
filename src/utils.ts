import {
  TodoType,
  todoSchema,
  todoArraySchema,
} from './types'

export const toTodo = (object: unknown): TodoType => {
  return todoSchema.parse(object);
}

export const toTodoArray = (object: unknown): TodoType[] => {
  return todoArraySchema.parse(object);
}
