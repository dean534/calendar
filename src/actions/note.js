import { ADD_NOTE } from "./type";
export const addNote = (year, month, day, title, description) => {
  return {
    type: ADD_NOTE,
    payload: {
      year,
      month,
      day,
      title,
      description
    }
  };
};
