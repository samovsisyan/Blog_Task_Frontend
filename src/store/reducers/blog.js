import { RECEIVE_BLOG_API_DATA } from "../actions/blog";


export default (state = {}, {type, data}) => {
    switch (type) {
        case RECEIVE_BLOG_API_DATA:
            return data;
        default:
            return state;
    }
}


// import { BLOG_REQUEST, BLOG_SUCCESS } from '../actions/blog';
//
// const initialState = {
//     list: [],
// };
//
// export default function reducer(state = initialState, action) {
//     switch (action.type) {
//         case BLOG_REQUEST: {
//             return { ...state };
//         }
//         case BLOG_SUCCESS: {
//             return {
//                 ...state,
//                 list: action.payload.blog,
//             };
//         }
//
//         default: {
//             return state;
//         }
//     }
// }
