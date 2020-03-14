import {    REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL} from '../actions/register';

const initialState = {
    register: [],
    username: null,
    password: null,
    email: null,
    role: null,
    img: null,

};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case REGISTER_REQUEST: {
            return {
                ...state,
                register: [],
            };
        }
        case REGISTER_SUCCESS: {
            const { username, password, email, role, img } = action.payload.data;
            return {
                ...state,
                username,
                password,
                email,
                role,
                img,

            };
        }
        case REGISTER_FAIL: {
            return {
                ...state,
                register: [],
            };
        }


        default: {
            return state;
        }
    }
}
