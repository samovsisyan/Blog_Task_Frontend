import {    COMMENTS_CREATE_REQUEST,
    COMMENTS_CREATE_SUCCESS,
    COMMENTS_CREATE_FAIL} from '../actions/comments_create';

const initialState = {
    comment: [],
    comment_create: [],
    name: null,
    description: null,
    user_id: null,
    blog_id: null,

};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case COMMENTS_CREATE_REQUEST: {
            return {
                ...state,
                comment_create: [],
            };
        }
        case COMMENTS_CREATE_SUCCESS: {
            const { name, description, user_id, blog_id } = action.payload.data;
            return {
                ...state,
                name,
                description,
                user_id,
                blog_id
            };
        }
        case COMMENTS_CREATE_FAIL: {
            return {
                ...state,
                comment_create: [],
            };
        }


        default: {
            return state;
        }
    }
}
