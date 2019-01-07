import { CHANGE_TITLE, CHANGE_DESCRIPTION, ADD_NOTE } from "../actions/type";

const initial = { title: "Excercise", description: "i want to ..." };

const inputReducer = (state = initial, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return { ...state, title: action.payload };
    case CHANGE_DESCRIPTION:
      return { ...state, description: action.payload };
    case ADD_NOTE:
      return {...initial};
    default:
      return state;
  }
};

export default inputReducer;
