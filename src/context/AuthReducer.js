import { LOGIN, LOGOUT, CREATE_USER } from "./actions.type";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, currentUser: action.payload.currentUser };
    case LOGOUT:
      return { ...state, currentUser: null };
    case CREATE_USER:
      return { ...state };
    default:
      return { ...state };
  }
};

export default AuthReducer;
