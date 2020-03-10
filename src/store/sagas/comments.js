import {takeLatest, call, put} from 'redux-saga/effects';
import {COMMENTS_REQUEST, COMMENTS_SUCCESS, COMMENTS_FAIL,
        COMMENTS_CREATE_REQUEST, COMMENTS_CREATE_SUCCESS, COMMENTS_CREATE_FAIL} from '../actions/comments';
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


function* handleCommentsCreateRequest(action) {
    try {
        const {name,description,user_id,blog_id} = yield call(api.fetchCommentsDataCreate, action.payload.data);
        yield put({
            type: COMMENTS_CREATE_SUCCESS,
            payload: {name,description,user_id,blog_id},
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: COMMENTS_CREATE_FAIL,
            message: e.message,
        });
    }
}




export default function* watchers() {
    yield takeLatest(COMMENTS_REQUEST, handleCommentsRequest);
    yield takeLatest(COMMENTS_CREATE_REQUEST, handleCommentsCreateRequest);

}
