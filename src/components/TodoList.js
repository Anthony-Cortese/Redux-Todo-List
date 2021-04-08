import React from 'react'
import {useSelector} from 'react-redux'
import AddTodo from './AddTodo'
import Todo from './Todo'

const TodoList = () => {
    const { todos } = useSelector(state => state.todos)
  console.log(todos)
    return (
        <div>
            <AddTodo />
            {todos.map(todo => <Todo key={todo.id}{...todo}/>)}
        </div>
    )
}

export default TodoList
