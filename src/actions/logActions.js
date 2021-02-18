import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT
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
    const res = await fetch(
      'https://github.com/fepu08/issue-logger/blob/main/db.json/logs'
    );
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Add new Log
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(
      'https://github.com/fepu08/issue-logger/blob/main/db.json/logs',
      {
        method: 'POST',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

//Delete Log from server
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(
      `https://github.com/fepu08/issue-logger/blob/main/db.json/logs/${id}`,
      {
        method: 'DELETE'
      }
    );

    const data = await res.json();
    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

//Update Log on server
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(
      `https://github.com/fepu08/issue-logger/blob/main/db.json/logs/${log.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: log
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

//Search server logs
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(
      `https://github.com/fepu08/issue-logger/blob/main/db.json/logs?q=${text}`
    );
    const data = await res.json();
    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set current
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

// Clear current
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
