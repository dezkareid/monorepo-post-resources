import { ADD_TODO, REMOVE_TODO, SET_INPUT } from './types';

export function setInput(input) {
  return {
    type: SET_INPUT,
    payload: input
  }
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export function removeTodo(todo) {
  return {
    type: REMOVE_TODO,
    payload: todo
  }
}
