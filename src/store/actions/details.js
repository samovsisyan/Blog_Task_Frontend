
export const BLOG_DETAILS_REQUEST = 'BLOG_DETAILS_REQUEST';
export const BLOG_DETAILS_SUCCESS = 'BLOG_DETAILS_SUCCESS';
export const BLOG_DETAILS_FAIL = 'BLOG_DETAILS_FAIL';


export function fetchBlogDetailsId(id) {
    return {
        type: BLOG_DETAILS_REQUEST, payload: {id},

    };

}
