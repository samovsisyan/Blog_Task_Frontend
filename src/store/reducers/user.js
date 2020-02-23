import {
    USERS_REQUEST,
    USERS_SUCCESS,
    USERS_FAIL,

} from "../actions/user";

const initialState = {
    authError: '',
    usersData: {},
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case USERS_REQUEST: {
            return { ...state, authError: '' };
        }
        case USERS_SUCCESS: {
            return {
                ...state,
                authError: '',
                usersData: action.payload.usersData,
            };
        }
        case USERS_FAIL: {
            return { ...state, authError: action.message };
        }

        default: {
            return state;
        }
    }
}


