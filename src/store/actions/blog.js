// export const REQUEST_BLOG_API_DATA = 'REQUEST_BLOG_API_DATA';
// export const RECEIVE_BLOG_API_DATA = 'RECEIVE_BLOG_API_DATA';
//
//
// export const requestBlogApiData = () => ({
//     type: REQUEST_BLOG_API_DATA
// });
//
// export const receiveBlogApiData = data => ({
//     type: RECEIVE_BLOG_API_DATA, data
// });


export const BLOG_REQUEST = 'BLOG_REQUEST';
export const BLOG_SUCCESS = 'BLOG_SUCCESS';
export const BLOG_FAIL = 'BLOG_FAIL';


export function fetchBlog() {
    return {
        type: BLOG_REQUEST, payload: {},
    };
}




