// import { all, fork } from "redux-saga/effects";
// import user from "./user";
// import blog from "./blog";
//
// export default function* root() {
//     const sagas = [
//         user,
//         blog,
//     ];
//     yield all(sagas.map(fork));
// }


import { all, fork } from 'redux-saga/effects';
import user from './user';
import blog from './blog';
import details from './details';
import comments from './comments';
import comments_create from './comments_create';

export default function* root() {
    const sagas = [
        user,
        blog,
        details,
        comments,
        comments_create
    ];
    yield all(sagas.map(fork));
}
