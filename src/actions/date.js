import { REDUCE_MONTH, ADD_MONTH, SELECT_DATE } from "./type";

export const reduceMonth = () => {
  return {
    type: REDUCE_MONTH
  };
};

export const addMonth = () => {
  return {
    type: ADD_MONTH
  };
};

export const selectDate = (day) => {
  return {
    type: SELECT_DATE,
    payload: day
  };
};
