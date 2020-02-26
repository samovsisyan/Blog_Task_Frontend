import { RECEIVE_BLOG_API_DATA } from "../actions/blog";


export default (state = {}, {type, data}) => {
    switch (type) {
        case RECEIVE_BLOG_API_DATA:
            return data;
        default:
            return state;
    }
}
