import { combineReducers } from "redux";
import dateReducer from "./dateReducer";
import noteReducer from "./noteReducer";
import uiReducer from "./uiReducer";
import inputReducer from "./inputReducer";
import targetReducer from './targetReducer'

const reducers = combineReducers({
  date: dateReducer,
  notes: noteReducer,
  ui: uiReducer,
  input: inputReducer,
  target: targetReducer
});

export default reducers;
