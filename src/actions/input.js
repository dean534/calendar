import { CHANGE_TITLE, CHANGE_DESCRIPTION } from "./type";

export const changeTitle = title => {
  return {
    type: CHANGE_TITLE,
    payload: title
  };
};

export const changeDescription = description => {
  return {
    type: CHANGE_DESCRIPTION,
    payload: description
  };
};

