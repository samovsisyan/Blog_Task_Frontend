// export const USERS_REQUEST = 'USERS_REQUEST';
// export const USERS_SUCCESS = 'USERS_SUCCESS';
// export const USERS_FAIL = 'USERS_FAIL';
//
//
// export function getUsers(data) {
//     return {
//         type: USERS_REQUEST, payload: {data}
//     }
// }

//
export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA';


export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });
