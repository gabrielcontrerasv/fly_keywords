import React from "react";

import { initialState, actions } from "../state";
import reducer from "../reducers";
import { interfaz } from "./values";

const ProviderContext = React.createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    ...interfaz(state, dispatch),
  };

  return (
    <ProviderContext.Provider value={value}>
      {children}
    </ProviderContext.Provider>
  );
};

export default Provider;
export { ProviderContext };
