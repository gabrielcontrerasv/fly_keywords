import axios from "axios";

const initialState = {
  user: null,
  instance: axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
  }),
};

const actionsInterfaz = {
  UPDATE_USER: "UPDATE_USER",
  UPDATE_INSTANCE: "UPDATE_INSTANCE",
};

const actions = {
  ...actionsInterfaz,
};

export { initialState, actions };
