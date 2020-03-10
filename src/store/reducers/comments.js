import { COMMENTS_REQUEST,
    COMMENTS_SUCCESS,} from '../actions/comments';

const initialState = {
    comment: [],

};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case COMMENTS_REQUEST: {
            return {...state};
        }
        case COMMENTS_SUCCESS: {

            return {
                ...state,
                comment: action.payload.comments,
            };

        }

        default: {
            return state;
        }
    }
}
