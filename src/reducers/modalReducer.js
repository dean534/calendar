import { TOGGLE_MODAL } from "../actions/type";
const initial = { open: false };

const modalReducer = (state = initial, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, open: !state.open };
    default:
      return state;
  }
};
export default modalReducer;
