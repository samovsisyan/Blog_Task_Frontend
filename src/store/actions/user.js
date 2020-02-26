export const REQUEST_USER_API_DATA = 'REQUEST_USER_API_DATA';
export const RECEIVE_USER_API_DATA = 'RECEIVE_USER_API_DATA';


export const requestUserApiData = () => ({
    type: REQUEST_USER_API_DATA
});

export const receiveUserApiData = data => ({
    type: RECEIVE_USER_API_DATA, data
});
