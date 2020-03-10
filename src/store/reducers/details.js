
import {BLOG_DETAILS_REQUEST, BLOG_DETAILS_SUCCESS, BLOG_DETAILS_FAIL} from '../actions/details';

const initialState = {
    details: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case BLOG_DETAILS_REQUEST: {

            return {
                ...state,
                details: {}

            };
        }

        case BLOG_DETAILS_SUCCESS: {
                const { details } = action.payload;
            console.log(" Redusers details", details)

            return {
                ...state,
                details
            };

        }


        case BLOG_DETAILS_FAIL: {
            return {
                ...state,
                details: {}
            };
        }

        default: {
            return state;
        }
    }
}
