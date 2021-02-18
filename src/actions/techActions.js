import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECH_ERROR
} from './types';

// Get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(
      'http://https://my-json-server.typicode.com/fepu08/issue-logger/techs'
    );
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECH_ERROR,
      payload: err.response.statusText
    });
  }
};

// Add tech from server
export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(
      'http://https://my-json-server.typicode.com/fepu08/issue-logger/techs',
      {
        method: 'POST',
        body: JSON.stringify(tech),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const data = await res.json();
    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECH_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(
      `http://https://my-json-server.typicode.com/fepu08/issue-logger/techs${id}`,
      {
        method: 'DELETE'
      }
    );

    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TECH_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};