import { SELECT_NOTE,INITIAL_SELECT } from "./type";

export const selectNote = noteId => {
  return { type: SELECT_NOTE, payload: noteId };
};

export const initialSelect = () => {
  return { type: INITIAL_SELECT };
};
