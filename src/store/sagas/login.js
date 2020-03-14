import {takeLatest, call, put} from 'redux-saga/effects';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} from '../actions/login';
import * as api from '../../api';


function* handleLoginRequest(action) {
    try {
        const data = yield call(api.fetchLoginData, action.payload.data);
        // console.log("LOGIN SAGAS DATA", data.user);
        yield put({
            type: LOGIN_SUCCESS,
            payload: {user: data.token},
        });

        // console.log("data.user", data.user)
    } catch (e) {
        console.log(e);
        yield put({
            type: LOGIN_FAIL,
            message: e.message,
        });
    }
}

export default function* watchers() {
    yield takeLatest(LOGIN_REQUEST, handleLoginRequest);

}
