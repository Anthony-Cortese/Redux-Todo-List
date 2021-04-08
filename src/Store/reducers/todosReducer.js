import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './../actions/todos.actions'

export const initialState = {
    todos: []
}

const todosReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_TODO:
            return({
                ...state,
                todos: [action.todo, ...state.todos]
                
            })

        case UPDATE_TODO:
            return ({
                ...state,
                todos: [...state.todos.map(todo => {
                    if(todo.id === action.todo.id) {

                        return action.todo
                    }
                     return todo   
                })]
            })

          case DELETE_TODO:
              return ({
                  ...state,
                  todos: [...state.todos.filter(todo => 
                       todo.id !== action.todo.id 
                      
                  )]
              })  
                
            default:
                return state
                
            }


}
export default todosReducer