import axios from 'axios';
import {
    API_BASE
} from "../_constants/API";

class UserServiseClass {
    login(data) {
        return axios.post(`${API_BASE}/users/sign_in`, {
                ...data
            })
            .then(res => {
                return res.data;
            })
            .catch(err => console.log(err));
    };

    registration(user) {
        return axios.post(`${API_BASE}/users/sign_up`, {
                ...user
            })
            .then(res => {
                return res.data;
            })
            .catch(err => console.log(err));
    }
}

const UserService = new UserServiseClass();
export default UserService;