import {takeLatest, call, put} from 'redux-saga/effects';
import {BLOG_DETAILS_REQUEST, BLOG_DETAILS_SUCCESS, BLOG_DETAILS_FAIL} from '../actions/details';
import * as api from '../../api';


function* handleBlogRequestDetailsId(action) {
    try {
        const data = yield call(api.fetchBlogDetailsId, action.payload.id);
        console.log("DATA DATA DATA", data)

        yield put({
            type: BLOG_DETAILS_SUCCESS,
            payload: {details: data.blog},
        });
        console.log(15415)

    } catch (e) {
        console.log(e);
        yield put({
            type: BLOG_DETAILS_FAIL,
            message: e.message,
        });
    }
}

export default function* watchers() {
    yield takeLatest(BLOG_DETAILS_REQUEST, handleBlogRequestDetailsId);
}


