export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const DELETE_TODO = 'DELETE TODO'

export const addTodo = todo => ({ type: ADD_TODO, todo})

export const updateTodo = todo => ({ type: UPDATE_TODO, todo})

export const deleteTodo = todo => ({ type: DELETE_TODO, todo})