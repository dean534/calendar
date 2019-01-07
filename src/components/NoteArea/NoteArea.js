import React from "react";
import { findMonFirst, daysArray } from "./date";
import { connect } from "react-redux";
import { toggleModal } from "../../actions/modal";
import { selectDate } from "../../actions/date";
import { changeTitle, changeDescription } from "../../actions/input";
import { addNote } from "../../actions/note";
import { Calendar, Day1, Day, WeekTitle, Modal } from "./NoteArea.style.js";

function NoteArea({
  year,
  month,
  day,
  open,
  toggleModal,
  selectDate,
  title,
  description,
  changeTitle,
  changeDescription,
  addNote
}) {
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  function handleDateClick(day) {
    toggleModal();
    selectDate(day);
  }
  function handleSubmit(e) {
    e.preventDefault();
    return;
    console.log(e);
  }
  return (
    <div>
      <Calendar>
        {week.map(day => (
          <WeekTitle>{day}</WeekTitle>
        ))}
        <Day1 monFirst={findMonFirst(year, month)} />
        {daysArray(year, month).map(day => (
          <Day onClick={() => handleDateClick(day)}>
            <Day.Typography>{day}</Day.Typography>
          </Day>
        ))}
      </Calendar>
      <Modal open={open} onClose={toggleModal}>
        <Modal.Conatiner>
          <Modal.Typography>
            {year}年{month}月{day}日
          </Modal.Typography>
          <form
            onSubmit={e => {
              e.preventDefault();
              addNote(
                year,
                month,
                day,
                title,
                description);
            }}
          >
            <Modal.TextField
              label="Title"
              name="title"
              value={title}
              margin="normal"
              variant="outlined"
              onChange={e => changeTitle(e.target.value)}
            />
            <Modal.TextField
              label="Description"
              name="description"
              multiline
              rows="4"
              value={description}
              margin="normal"
              variant="outlined"
              fullWidth
              onChange={e => changeDescription(e.target.value)}
            />
            <Modal.Button type="submit">submit</Modal.Button>
          </form>
        </Modal.Conatiner>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    month: state.date.month,
    year: state.date.year,
    open: state.modal.open,
    day: state.date.day,
    title: state.input.title,
    description: state.input.description
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal()),
    selectDate: day => dispatch(selectDate(day)),
    changeTitle: text => dispatch(changeTitle(text)),
    changeDescription: text => dispatch(changeDescription(text)),
    addNote: (year, month, day, title, description) =>
      dispatch(addNote(year, month, day, title, description))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteArea);
