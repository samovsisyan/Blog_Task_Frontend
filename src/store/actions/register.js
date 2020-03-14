export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';


export function fetchRegister(data, username, password, email, role, img) {
    return {
        type: REGISTER_REQUEST,
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
