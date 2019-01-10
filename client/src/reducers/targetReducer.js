import { SELECT_NOTE, INITIAL_SELECT } from "../actions/type";

const initailState = { targetNoteId: null };

const targetReducer = (state = initailState, action) => {
  switch (action.type) {
    case SELECT_NOTE:
      return { ...state, targetNoteId: action.payload };
      case INITIAL_SELECT:
      return { ...state, targetNoteId: null }
    default:
      return state;
  }
};

export default targetReducer;
