import {
  READ_USERS,
  READ_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "./userTypes";

const initialState = {
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_USER:
    case CREATE_USER:
    case UPDATE_USER:
      return {
        users: action.payload,
        error: "",
      };
    case READ_USERS:
      const allUsers = response.data.map((user) => user.name);
      return {
        users: allUsers,
        error: "",
      };
    case DELETE_USER:
      delete state[action.id];
      return { ...state };
    default:
      return state;
  }
};
