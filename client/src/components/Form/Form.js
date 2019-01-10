import React from "react";
import { Modal } from "./From.style";
import { connect } from "react-redux";
import { modalToggle } from "../../actions/ui";
import { deleteNote, createNote, updateNote } from "../../actions/notes";
import { changeInput } from "../../actions/input";
import { initialSelect } from "../../actions/target";

function Form({
  date,
  modal,
  input,
  targetNoteId,
  modalToggle,
  changeInput,
  createNote,
  deleteNote,
  initialSelect,
  updateNote
}) {
  const { year, month, day } = date;
  const { title, detail } = input;
  const handleInput = option => e => {
    changeInput(option, e.target.value);
  };

  const handleClick = action => payload => e => {
    action(payload);
    modalToggle();
  };

  const handleModalClose = () => {
    initialSelect();
    changeInput("title");
    changeInput("detail");
    modalToggle();
  };
  const button = () => {
    if (targetNoteId) {
      return (
        <>
          <Modal.Button
            color="primary"
            variant="contained"
            onClick={handleClick(updateNote)({
              title,
              detail,
              _id: targetNoteId,
              date: `${year}-${month}-${day}`
            })}
          >
            update
          </Modal.Button>
          <Modal.Button
            color="secondary"
            variant="contained"
            onClick={handleClick(deleteNote)(targetNoteId)}
          >
            delete
          </Modal.Button>
        </>
      );
    }
    return (
      <Modal.Button
        color="primary"
        variant="contained"
        onClick={handleClick(createNote)({
          title,
          detail,
          date: `${year}-${month}-${day}`
        })}
      >
        create
      </Modal.Button>
    );
  };
  return (
    <Modal open={modal.open} onClose={handleModalClose}>
      <Modal.Conatiner>
        <Modal.Typography>
          {year}年{month}月{day}日
        </Modal.Typography>
        <form>
          <Modal.TextField
            label="Title"
            name="title"
            value={input.title}
            margin="normal"
            variant="outlined"
            onChange={handleInput("title")}
          />
          <Modal.TextField
            label="detail"
            name="detail"
            value={input.detail}
            multiline
            rows="4"
            margin="normal"
            variant="outlined"
            fullWidth
            onChange={handleInput("detail")}
          />
          {button()}
        </form>
      </Modal.Conatiner>
    </Modal>
  );
}
const mapStateToProps = state => {
  return {
    date: state.date,
    modal: state.ui.modal,
    input: state.input,
    targetNoteId: state.target.targetNoteId
  };
};

export default connect(
  mapStateToProps,
  {
    modalToggle,
    changeInput,
    createNote,
    deleteNote,
    initialSelect,
    updateNote
  }
)(Form);
