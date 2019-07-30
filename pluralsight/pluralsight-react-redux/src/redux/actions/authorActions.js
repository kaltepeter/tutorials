import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

const loadAuthorsSuccess = authors => {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
};

const loadAuthors = () => {
  return dispatch => {
    dispatch(beginApiCall());
    return authorApi
      .getAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
};

export { loadAuthors, loadAuthorsSuccess };
