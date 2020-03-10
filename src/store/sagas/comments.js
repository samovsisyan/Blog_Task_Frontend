import {takeLatest, call, put} from 'redux-saga/effects';
import {COMMENTS_REQUEST, COMMENTS_SUCCESS, COMMENTS_FAIL} from '../actions/comments';
import * as api from '../../api';

function* handleCommentsRequest() {
    try {
        const data = yield call(api.fetchCommentsData);
        console.log("COMMENTS DTAT",data)
        yield put({
            type: COMMENTS_SUCCESS,
            payload: {comments: data.comments},
        });

    } catch (e) {
        console.log(e);
        yield put({
            type: COMMENTS_FAIL,
            message: e.message,
        });
    }
}


export default function* watchers() {
    yield takeLatest(COMMENTS_REQUEST, handleCommentsRequest);

}
