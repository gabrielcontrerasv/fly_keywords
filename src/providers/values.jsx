import { actions } from "../state";

const interfaz = (state, dispatch) => {
  return {
    instance: state.instance,
    user: state.user,
    updateUser: (user) => {
      dispatch({ type: actions.UPDATE_USER, user });
    },
    updateInstance: (instance) => {
        dispatch({ type: actions.UPDATE_INSTANCE, instance });
      },
  };
};

export { interfaz };
