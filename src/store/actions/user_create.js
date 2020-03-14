export const USER_CREATE_REQUEST = 'USER_CREATE_REQUEST';
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS';
export const USER_CREATE_FAIL = 'USER_CREATE_FAIL';


export function fetchUserCreate( data, username, password, email, role, img ) {
    return {
        type: USER_CREATE_REQUEST,
        payload:
            {
                data,
                username,
                password,
                email,
                role,
                img,
            },
    };
}
