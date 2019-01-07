import { ADD_MONTH, REDUCE_MONTH, SELECT_DATE } from "../actions/type";

const now = new Date();

const initial = { year: now.getFullYear(), month: now.getMonth() + 1, day: null };

const date = (state = initial, action) => {
  switch (action.type) {
    case ADD_MONTH:
      if (state.month === 12) {
        return { year: state.year + 1, month: 1 };
      }
      return { ...state, month: state.month + 1 };
    case REDUCE_MONTH:
    if (state.month === 1) {
        return { year: state.year - 1, month: 12 };
      }
      return { ...state, month: state.month - 1 };
      case SELECT_DATE:
      return {...state, day: action.payload}
    default:
      return state;
  }
};
export default date;
