import axios from 'axios';
import querystring from 'querystring';
import {   
    SERVERIP_FAILED,
    LOGIN_INIT,
    SERVER_NOT_REACHABLE,
    LOGGED_IN,
    ON_LOGOUT
 } from '../_constants';
 import { URI } from '../config/Config';

export const onSubmit = (user_data) => {
	return (dispatch) => {
        dispatch({ type: LOGIN_INIT });
        axios.post(`http://${URI.phpServer}/MIS_Dev/testing/check_login.php`, querystring.stringify(user_data))
        .then((response) => {     
            return response.data;
        }).then(async (res) => {
     		if (res.errors.status === true) {
     			const userInfo = [{
                    email:res.email,
                    password : res.password 
                }];
                localStorage.setItem('user', JSON.stringify(userInfo));
                
                dispatch({
                    type: LOGGED_IN,
                    payload: userInfo
                });
     		}else if (res.errors.status === false) {   			
                dispatch({
                    type: SERVERIP_FAILED,
                    payload: res.errors.message
                });
            } else {
                dispatch({ 
                    type: SERVER_NOT_REACHABLE,
                    payload: 'Something went wrong please try again.'
                });                
            }
        }).catch((res) => {  
            dispatch({ 
                type: SERVER_NOT_REACHABLE,
                payload: 'Server not reachable'
             });
        });
    };
};

export const LoggedIn = () => { 
    return {
        type: LOGGED_IN,
        payload: ''
    }
}
export const onLogout = ()  => {
    localStorage.clear();
    return{
        type: ON_LOGOUT,
        payload: ''
    }
}