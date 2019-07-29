import { createStore, applyMiddleware, compose } from "react";
import reduxImutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers";

const configureStore = initialState => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImutableStateInvariant()))
  );
};

export default configureStore;
