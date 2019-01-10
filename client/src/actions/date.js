import { INCREASE_MONTH, REDUCE_MONTH, SELECT_DAY } from "./type";

export const increaseMonth = () => {
  return {
    type: INCREASE_MONTH
  };
};
export const reduceMonth = () => {
  return {
    type: REDUCE_MONTH
  };
};

export const selectDay = day => {
  return {
    type: SELECT_DAY,
    payload: day
  };
};
