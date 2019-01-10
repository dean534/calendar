import {
  DELETE_NOTE,
  CREATE_NOTE,
  UPDATE_NOTE,
  FETCH_NOTE
} from "../actions/type";
const initialState = {
  notes: [
    {
      _id: "123",
      date: "2019-1-2",
      title: "study",
      detail: "this is study time"
    },
    {
      _id: "111",
      date: "2019-1-1",
      title: "excerise",
      detail: "this is time for excerise"
    }
  ],
  loading: false
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTE:
      return { ...state, notes: action.payload };
    case CREATE_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case DELETE_NOTE:
      return {
        ...state,
        notes: [...state.notes.filter(note => note._id !== action.payload)]
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes.filter(note => note._id !== action.payload._id),
          action.payload
        ]
      };
    default:
      return state;
  }
};

export default noteReducer;
