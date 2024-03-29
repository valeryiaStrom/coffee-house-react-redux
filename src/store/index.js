import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootMenuPageSaga from "./menu/menu.saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, sagaMiddleware, logger)
);

sagaMiddleware.run(rootMenuPageSaga);

export default store;
