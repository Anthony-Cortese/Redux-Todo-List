import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../Store/actions/todos.actions'

const UpdateTodo = ({id,todo}) => {
  const [updatedTodo, setUpdatedTodo] = useState(todo)

  const dispatch = useDispatch()
    
  const onChange = e => {
    setUpdatedTodo(e.target.value)
    }
    console.log(updatedTodo)
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateTodo({id, todo: updatedTodo}))
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={updatedTodo} onChange={onChange} />
        <button type='submit'>Update Todo</button>
      </form>
    </div>
  )
}

export default UpdateTodo