// import { RECEIVE_USER_API_DATA } from "../actions/user";
//
//
// export default (state = {}, {type, data}) => {
//     switch (type) {
//         case RECEIVE_USER_API_DATA:
//             return data;
//         default:
//             return state;
//     }
// }


import {USER_REQUEST, USER_SUCCESS, } from '../actions/user';

const initialState = {
    userData: [],

};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_REQUEST: {
            return {...state};
        }
        case USER_SUCCESS: {
            return {
                ...state,
                userData: action.payload.users,
            };
        }


        default: {
            return state;
        }
    }
}
