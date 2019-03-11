import { 
    FETCH_ALL_TODOS,
    FETCH_TODO,
    DELETE_TODO,
    ADD_TODO,
    EDIT_TODO,
    OPEN_MODAL,
    CLOSE_MODAL,
    CHANGE_DATE
     } from '../_actions/todos.actions';

const initialState = {
    todosData:[],
    currentDate:new Date(),
    currentId:null,
    currentTodo:{},
    open:false
};

export default (state = initialState, action)=>{
    switch(action.type){
        case FETCH_ALL_TODOS:{
            return{
                ...state,
                todosData: action.payload
            }
        }

        case FETCH_TODO:{
            
            return{
                ...state,
                currentDate: new Date(action.currentDate),
                currentId: action.currentId,
                currentTodo: action.currentTodo
            }
        }
        
        case ADD_TODO:{
            return {
                ...state,
                todosData:[...action.new_todos, action.new_title]
            }
        }

        
        case EDIT_TODO:{
            return{
                ...state,
                currentId:null
            }
        }

        case DELETE_TODO:{
            return{
                ...state,
                todosData:[...state.todosData.filter((elem)=>(
                    elem.id !== action.id))]
            }
        }
        case OPEN_MODAL:{
            return{
                ...state,
                open:true
            }
        }
        
        case CLOSE_MODAL:{
            return{
                ...state,
                open:false,
                currentDate: new Date(),
                currentId:null
            }
        }
       
        case CHANGE_DATE:{
            return{
                ...state,
                currentDate: action.new_date
            }
        }

        default: return state;
    }
}