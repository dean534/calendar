import { ADD_NOTE } from "../actions/type";

const initial = [];

const inputReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {};
    default:
      return state;
  }
};
