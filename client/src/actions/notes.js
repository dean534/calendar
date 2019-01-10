import { DELETE_NOTE, CREATE_NOTE, UPDATE_NOTE, FETCH_NOTE } from "./type";
import axios from "axios";

export const fetchNote = year_month => dispatch => {
  axios
    .get(`http://localhost:3000/api/notes/${year_month}`)
    .then(res => dispatch({ type: FETCH_NOTE, payload: res.data }))
    .catch(e => console.log(e));
};

export const deleteNote = id => dispatch => {
  axios
    .delete(`http://localhost:3000/api/notes/${id}`)
    .then(res => console.log(res.data))
    .then(res =>
      dispatch({
        type: DELETE_NOTE,
        payload: id
      })
    )
    .catch(e => console.log(e));
};

export const createNote = note => dispatch => {
  axios
    .post(`http://localhost:3000/api/notes/`, note)
    .then(res =>
      dispatch({
        type: CREATE_NOTE,
        payload: res.data
      })
    )
    .catch(e => console.log(e));
};

export const updateNote = note => dispatch => {
  const { _id, title, date, detail } = note;
  axios
    .put(`http://localhost:3000/api/notes/${_id}`, { title, date, detail })
    .then(res =>
      dispatch({
        type: UPDATE_NOTE,
        payload: note
      })
    )
    .catch(e => console.log(e));
};
