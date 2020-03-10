export const COMMENTS_CREATE_REQUEST = 'COMMENTS_CREATE_REQUEST';
export const COMMENTS_CREATE_SUCCESS = 'COMMENTS_CREATE_SUCCESS';
export const COMMENTS_CREATE_FAIL = 'COMMENTS_CREATE_FAIL';


export function fetchCommentsCreate( data, name, description, user_id, blog_id ) {
    return {
        type: COMMENTS_CREATE_REQUEST,
        payload:
            {
                data,
                name,
                description,
                user_id,
                blog_id
            },
    };
}
