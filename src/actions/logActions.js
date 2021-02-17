import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SET_LOADING,
  LOGS_ERROR
} from './types';

// export const getLogs = () => {
//  // redux thunk allows to return func directly
//   return async (dispatch) => {
//     setLoading();
//     const res = await fetch('/logs');
//     const data = await res.json();
//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     })
//   };
// };

// same as above
//Get Logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// Add new Log
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

//Delete Log from server
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/logs/${id}`, {
      method: 'DELETE'
    });

    const data = await res.json();
    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
