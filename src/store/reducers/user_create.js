import {    USER_CREATE_REQUEST,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL} from '../actions/user_create';

const initialState = {
    user_create: [],
    username: null,
    password: null,
    email: null,
    role: null,
    img: null,

};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case USER_CREATE_REQUEST: {
            return {
                ...state,
                user_create: [],
            };
        }
        case USER_CREATE_SUCCESS: {
            const { username, password, email, role, img } = action.payload.data;
            return {
                ...state,
                username,
                password,
                email,
                role,
                img
            };
        }
        case USER_CREATE_FAIL: {
            return {
                ...state,
                user_create: [],
            };
        }


        default: {
            return state;
        }
    }
}
