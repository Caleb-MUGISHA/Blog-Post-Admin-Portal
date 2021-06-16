import axios from "axios";
import {
  READ_USERS,
  READ_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "./userTypes";

const ROOT_URL = "https://jsonplaceholder.typicode.com";

export const readusers = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/users`);
  dispatch({ type: READ_USERS, response });
};

export const postUSER = (values) => async (dispatch) => {
  const response = await axios.post(`${ROOT_URL}/users`, values);
  dispatch({ type: CREATE_USER, response });
};

export const putUSER = (values) => async (dispatch) => {
  const response = await axios.put(`${ROOT_URL}/users/${values.id}`, values);
  dispatch({ type: UPDATE_USER, response });
};

export const getUSER = (id) => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/users/${id}`);
  dispatch({ type: READ_USER, response });
};

export const deleteUSER = (id) => async (dispatch) => {
  await axios.delete(`${ROOT_URL}/users/${id}`);
  dispatch({ type: DELETE_USER, id });
};
