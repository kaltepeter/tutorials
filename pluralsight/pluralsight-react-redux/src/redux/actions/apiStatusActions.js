import * as types from "./actionTypes";

const beginApiCall = () => {
  return { type: types.BEGIN_API_CALL };
};

const apiCallError = () => {
  return { type: types.API_CALL_ERROR };
};

export { beginApiCall, apiCallError };
