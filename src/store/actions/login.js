export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';


export function fetchLogin(data) {
    return {
        type: LOGIN_REQUEST,  payload:{data},
    };
}

