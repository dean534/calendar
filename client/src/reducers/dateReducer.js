import { INCREASE_MONTH, REDUCE_MONTH, SELECT_DAY } from "../actions/type";

const date = new Date();

const initialState = {
  year: date.getFullYear(),
  month: date.getMonth() + 1
};

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_MONTH:
      if (state.month === 12) {
        return { year: state.year + 1, month: 1 };
      }
      return { ...state, month: state.month + 1 };
    case REDUCE_MONTH:
      if (state.month === 1) {
        return { year: state.year - 1, month: 12 };
      }
      return { ...state, month: state.month - 1 };
    case SELECT_DAY:
      return { ...state, day: action.payload };
    default:
      return state;
  }
};

export default dateReducer;
