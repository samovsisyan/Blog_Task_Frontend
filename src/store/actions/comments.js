export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS';
export const COMMENTS_FAIL = 'COMMENTS_FAIL';


export function fetchComments() {
    return {
        type: COMMENTS_REQUEST, payload: {},
    };
}




