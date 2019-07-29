import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

const loadAuthorsSuccess = authors => {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
};

const loadAuthors = () => {
  return dispatch => {
    return authorApi
      .getAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw error;
      });
  };
};

export { loadAuthors, loadAuthorsSuccess };
