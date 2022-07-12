import { put, call, takeEvery } from "redux-saga/effects";

export function* handleImagesLoad() {
  console.log("saga");
}

export default function* watchImagesLoad() {
  yield takeEvery(GET_USERS, handleImagesLoad);
}
