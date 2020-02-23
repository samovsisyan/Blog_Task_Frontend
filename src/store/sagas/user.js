// import {takeLatest, call, put} from 'redux-saga/effects'
// import * as api from '../../api';
//
// import {
//     USERS_REQUEST,
//     USERS_SUCCESS,
//     USERS_FAIL,
//
// } from "../actions/user";
//
// function* requestGetUsers(action) {
//     try {
//         const { data } = yield call(api.getUser, action.payload.data);
//
//         yield put({
//             type: USERS_SUCCESS,
//             payload: { usersData: data.usersData },
//         });
//         console.log(77777777777777777)
//
//     } catch (e) {
//         console.log(e.message);
//         yield put({
//
//             type: USERS_FAIL,
//             message: e.response.data.message || e.message,
//         });
//     }
// }
//
//
//
// export default function* watchers() {
//     yield takeLatest(USERS_REQUEST, requestGetUsers)
// }



import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { REQUEST_API_DATA, receiveApiData } from "../actions/user";
import { fetchData } from '../../api';

function* getApiData(action) {
    try{
        const data = yield call(fetchData);
        // console.log(data,8888)
        yield put(receiveApiData(data));
    }catch (e) {
        console.log(e)
    }
}


export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA, getApiData);
}
