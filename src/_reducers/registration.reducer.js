import {REGISTER_USER} from '../_actions/user.actions';

const initialState = {
    user:{},
    message:null
};

export default (state = initialState, action)=>{
    switch(action.type){
        case REGISTER_USER:
            return {
                ...state,
                user: action.user, 
                message: action.message
            }
        default: return state;
    }
};