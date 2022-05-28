import { actions } from "../state";

const interfaz = (state, dispatch) => {
  return {
    user: state.user,
    updateUser: (user) => {
      dispatch({ type: actions.UPDATE_USER, user });
    },
  };
};

export { interfaz };
