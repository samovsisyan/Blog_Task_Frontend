// import { call, put, takeLatest } from 'redux-saga/effects';
//
// import { REQUEST_BLOG_API_DATA, receiveBlogApiData } from "../actions/blog";
// import { fetchBlogData } from '../../api';
//
// function* getBlogApiData(action) {
//     try{
//         const data = yield call(fetchBlogData);
//         yield put(receiveBlogApiData(data));
//     }catch (e) {
//         console.log(e)
//     }
// }

//
// export default function* mySaga() {
//     yield takeLatest(REQUEST_BLOG_API_DATA, getBlogApiData);
// }


import {takeLatest, call, put} from 'redux-saga/effects';
import {BLOG_FAIL, BLOG_REQUEST, BLOG_SUCCESS} from '../actions/blog';
import * as api from '../../api';

function* handleBlogRequest() {
    try {
        const data = yield call(api.fetchBlogData);
        yield put({
            type: BLOG_SUCCESS,
            payload: {blog: data.blog},
        });

    } catch (e) {
        console.log(e, 95);
        yield put({
            type: BLOG_FAIL,
            message: e.message,
        });
    }
}

export default function* watchers() {
    yield takeLatest(BLOG_REQUEST, handleBlogRequest);
}
