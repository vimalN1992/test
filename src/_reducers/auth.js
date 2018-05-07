import {
    LOGIN_SUCCESS,
    SERVERIP_FAILED,
    LOGIN_INIT,
    SERVER_NOT_REACHABLE,
    LOGGED_IN,
    ON_LOGOUT
 } from '../_constants';

const INIT = {
    email: null, 
    password: '', 
    serverIP: '', 
    error: '',
    isLoggedIn: false,
    loading: false, 
};

export default (state= INIT, action) => {    
    switch (action.type) {

        case LOGIN_SUCCESS:  
            return { ...state, error: '', isLoggedIn: true, email: action.payload.email, password: action.payload.password, loading: false };   
        case LOGIN_INIT:  
            return { ...state, error: '', loading: true };    
        case SERVER_NOT_REACHABLE:  
            return { ...state, error: action.payload, loading: false };   
        case LOGGED_IN:  
            return { ...state, error: '', loading: false, isLoggedIn: true }; 
        case ON_LOGOUT: 
            return { ...state, error: '', loading: false, isLoggedIn: false };    
        case SERVERIP_FAILED:  
            return { ...state, error: action.payload, loading: false };                                                                             
        default:
            return state;
    }
};