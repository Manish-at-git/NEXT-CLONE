import { put, call, takeEvery } from "redux-saga/effects";
import { NAVBARTOGGLED } from "../actionTypes";

export function* handleImagesLoad() {
  console.log("saga");
}

export default function* watchImagesLoad() {
  yield takeEvery(NAVBARTOGGLED, handleImagesLoad);
}
