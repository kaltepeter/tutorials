import * as types from "./actionTypes";

const beginApiCall = () => {
  return { type: types.BEGIN_API_CALL };
};

export { beginApiCall };
