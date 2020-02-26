export const REQUEST_BLOG_API_DATA = 'REQUEST_BLOG_API_DATA';
export const RECEIVE_BLOG_API_DATA = 'RECEIVE_BLOG_API_DATA';


export const requestBlogApiData = () => ({
    type: REQUEST_BLOG_API_DATA
});

export const receiveBlogApiData = data => ({
    type: RECEIVE_BLOG_API_DATA, data
});
