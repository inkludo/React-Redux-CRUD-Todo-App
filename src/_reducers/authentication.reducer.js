import {LOGIN_USER, LOGOUT_USER, ERROR_LOGIN} from '../_actions/user.actions';

const initialState ={
    token: localStorage.getItem('token'),
    auth: JSON.parse(localStorage.getItem('auth')),
    user:{},
    errorLogin:''
};

export default (state = initialState, action) => {
    switch(action.type){
        case LOGIN_USER:
            return{
                ...state,
                token: action.token,
                auth: action.auth,
                user: action.user,
                errorLogin:''
            }
        case LOGOUT_USER:
            return{
                ...state,
                token:null,
                auth:false
            }
        case ERROR_LOGIN:
            return{
                ...state,
                errorLogin: action.errorLogin
            }
        default: return state;
    }
}