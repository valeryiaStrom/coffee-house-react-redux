import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getMenuPageRequested,
  getMenuPageRequestCompleted,
  getMenuPageRequestFailed,
} from "./menu.actions";
import { products } from "../../data/products";
import { GET_MENU_PAGE_REQUESTED } from "./menu.constants";

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

// worker Saga: will be fired on GET_MENU_PAGE_REQUESTED actions
function* fetchMenuPage() {
  try {
    yield call(delay, 3000);
    yield put(getMenuPageRequestCompleted(products));
  } catch (e) {
    yield put(getMenuPageRequestFailed);
  }
}

function* watchGetMenuPage() {
  yield takeLatest(GET_MENU_PAGE_REQUESTED, fetchMenuPage);
}

export default function* rootMenuPageSaga() {
  yield all([watchGetMenuPage()]);
}
