import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../Store/actions/todos.actions' 

const AddTodo = () => {

    const dispatch = useDispatch()
   
    const [todo, setTodo] = useState('') 

   const onChange = (e) => {
       setTodo(e.target.value)
   }

   const handleSubmit = e => {
       e.preventDefault()
       const newTodo = {
           todo,
           id: Date.now(),
       }
       dispatch(addTodo(newTodo))

       setTodo('')
   }
    
   return (
        <div>
          <form onSubmit={handleSubmit}>
              <input type="text" value={todo} onChange={ onChange }></input>
              <button type='submit'>Add todo</button>
          </form>  
        </div>
    )
}

export default AddTodo
