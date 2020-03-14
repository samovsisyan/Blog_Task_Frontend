import {takeLatest, call, put} from 'redux-saga/effects';
import { COMMENTS_CREATE_REQUEST, COMMENTS_CREATE_SUCCESS, COMMENTS_CREATE_FAIL } from '../actions/comments_create';
import * as api from '../../api';



function* handleCommentsCreateRequest(action) {
    try {
        const { name, description, user_id, blog_id } = yield call(api.fetchCommentsDataCreate, action.payload.data);
        yield put({
            type: COMMENTS_CREATE_SUCCESS,
            payload: { name, description, user_id, blog_id },
        });
    } catch (e) {
        console.log(e,5151354156);
        yield put({
            type: COMMENTS_CREATE_FAIL,
            message: e.message,
        });
    }
}

export default function* watchers() {
    yield takeLatest(COMMENTS_CREATE_REQUEST, handleCommentsCreateRequest);

}
