import { all, fork } from "redux-saga/effects";
import user from "./user";
import blog from "./blog";

export default function* root() {
    const sagas = [
        user,
        blog,
    ];
    yield all(sagas.map(fork));
}
