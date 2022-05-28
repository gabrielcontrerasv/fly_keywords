import { actions } from "../state";

const interfazReducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_USER: {
      return { ...state, user: action.user };
    }
    default:
      return state;
  }
};

const combineReducers = (reducers) => {
  return (state, action) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        ...reducers[prop]({ [prop]: acc[prop] }, action),
      };
    }, state);
  };
};

const appReducers = combineReducers({
  interfaz: interfazReducer,
});

export default appReducers;
