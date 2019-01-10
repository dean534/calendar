import { CHANGE_INPUT } from "../actions/type";

const initialState = { title: null, detail: null };

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default uiReducer;
