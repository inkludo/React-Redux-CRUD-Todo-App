import UserService from '../_services/user.service';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const ERROR_LOGIN = 'ERROR_LOGIN';
export const REGISTER_USER = 'REGISTER_USER';

export const login = (user) => dispatch => {
    return UserService.login(user)
        .then((res) => {
            localStorage.setItem('token', res.token);
            localStorage.setItem('auth', JSON.stringify(res.auth));
            dispatch({
                type: LOGIN_USER,
                token: res.token,
                auth: res.auth,
                user: res.user
            });
        })
        .catch(
            err => {
                console.log(err);
                dispatch({
                    type: ERROR_LOGIN
                })
            }

        )
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('auth');
    dispatch({
        type: LOGOUT_USER
    })
};



export const register = (user) => dispatch => {
    return UserService.registration(user)
        .then((request) => {
            dispatch({
                type: REGISTER_USER,
                user: request.user,
                message: request.message
            });
        })
        .catch(err => console.log(err))
};