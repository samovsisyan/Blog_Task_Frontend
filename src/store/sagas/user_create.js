import {takeLatest, call, put} from 'redux-saga/effects';
import { USER_CREATE_REQUEST, USER_CREATE_SUCCESS, USER_CREATE_FAIL } from '../actions/user_create';
import * as api from '../../api';



function* handleUserCreateRequest(action) {
    try {
        const { username, password, email, role, img } = yield call(api.fetchUserDataCreate, action.payload.data);
        yield put({
            type: USER_CREATE_SUCCESS,
            payload: { username, password, email, role, img, },
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: USER_CREATE_FAIL,
            message: e.message,
        });
    }
}

export default function* watchers() {
    yield takeLatest(USER_CREATE_REQUEST, handleUserCreateRequest);

}
