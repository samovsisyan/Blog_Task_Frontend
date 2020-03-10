export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS';
export const COMMENTS_FAIL = 'COMMENTS_FAIL';


export function fetchComments() {
    return {
        type: COMMENTS_REQUEST, payload: {},
    };
}



export const COMMENTS_CREATE_REQUEST = 'COMMENTS_CREATE_REQUEST';
export const COMMENTS_CREATE_SUCCESS = 'COMMENTS_CREATE_SUCCESS';
export const COMMENTS_CREATE_FAIL = 'COMMENTS_CREATE_FAIL';


export function fetchCommentsCreate(name,description,user_id,blog_id) {
    return {
        type: COMMENTS_CREATE_REQUEST,
        payload:
            {
                name,
                description,
                user_id,
                blog_id
            },
    };
}
