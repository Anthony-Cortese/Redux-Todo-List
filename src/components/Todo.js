import React, {useState} from 'react'
import UpdateTodo from './UpdateTodo'
import { deleteTodo } from '../Store/actions/todos.actions'
import { useDispatch } from 'react-redux'

const Todo = ({todo, id}) => {
    const [isUpdate, setIsUpdate] = useState(false)
    const dispatch = useDispatch()

    const handleDelete = () =>{
    dispatch(deleteTodo({id, todo: deleteTodo}))
}


    
    return (
        <div>
            <p>{todo}</p>
            {isUpdate ? <UpdateTodo id={id} todo={todo} />: ''}
            <button onClick={() => setIsUpdate(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            
        </div>
    )
}

export default Todo