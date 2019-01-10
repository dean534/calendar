import { CHANGE_INPUT } from "./type";

export const changeInput = (option, text) => {
  return {
    type: CHANGE_INPUT,
    payload: { [option]: text }
  };
};
