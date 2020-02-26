import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_BLOG_API_DATA, receiveBlogApiData } from "../actions/blog";
import { fetchBlogData } from '../../api';

function* getBlogApiData(action) {
    try{
        const data = yield call(fetchBlogData);
        yield put(receiveBlogApiData(data));
    }catch (e) {
        console.log(e)
    }
}


export default function* mySaga() {
    yield takeLatest(REQUEST_BLOG_API_DATA, getBlogApiData);
}
