import {takeLatest, call, put} from 'redux-saga/effects';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/register';
import * as api from '../../api';



function* handleRegisterRequest(action) {
    try {
        const { username, password, email, role, img} = yield call(api.fetchRegisterData, action.payload.data);
        yield put({
            type: REGISTER_SUCCESS,
            payload: { username, password, email, role, img },
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: REGISTER_FAIL,
            message: e.message,
        });
    }
}

export default function* watchers() {
    yield takeLatest(REGISTER_REQUEST, handleRegisterRequest);

}
