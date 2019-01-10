import { MODAL_TOGGLE } from "../actions/type";

const initialState = { modal: { open: false } };

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_TOGGLE:
      return { ...state, modal: { open: !state.modal.open } };
    default:
      return state;
  }
};

export default uiReducer;
