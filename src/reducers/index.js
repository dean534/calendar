import { combineReducers } from "redux";
import dateReducer from "./dateReducer";
import modalReducer from "./modalReducer";
import inputReducer from "./inputReducer";
import noteReducer from "./noteReducer";
const reducers = combineReducers({
  date: dateReducer,
  modal: modalReducer,
  input: inputReducer,
  note: noteReducer
});

export default reducers;
