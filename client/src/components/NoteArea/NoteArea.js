import React from "react";
import { connect } from "react-redux";
import { findMonFirst, daysArray } from "../../calculation/date";
import { changeInput } from "../../actions/input";
import { modalToggle } from "../../actions/ui";
import { selectDay } from "../../actions/date";
import { selectNote } from "../../actions/target";
import { Calendar, Day1, Day, WeekTitle } from "./NoteArea.style.js";
import { fetchNote } from "../../actions/notes";

class NoteArea extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.targetNoteId !== null &&
      this.props.targetNoteId !== prevProps.targetNoteId
    ) {
      let note = this.props.notes.filter(
        note => note._id === this.props.targetNoteId
      )[0];
      this.props.changeInput("title", note.title);
      this.props.changeInput("detail", note.detail);
    }
  }
  componentDidMount() {
    this.props.fetchNote(`${this.props.date.year}-${this.props.date.month}`);
  }

  handleClick = day => e => {
    console.dir(e.target)
    if (e.target.classList[2] === "note") {
      this.props.selectNote(e.target.attributes.noteId.nodeValue);
    }
    this.props.selectDay(day);
    this.props.modalToggle();
  };
  handledelete = id => e => {
    this.props.deleteNote(id);
  };
  render() {
    const { notes } = this.props;
    const { year, month } = this.props.date;
    const year_month = `${year}-${month}`;
    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    return (
      <div>
        <Calendar>
          {week.map(day => (
            <WeekTitle>{day}</WeekTitle>
          ))}
          <Day1 monFirst={findMonFirst(year, month)} />
          {daysArray(year, month).map(day => (
            <Day key={day} onClick={this.handleClick(day)}>
              <Day.Typography>{day}</Day.Typography>
              {notes
                .filter(note => note.date === `${year_month}-${day}`)
                .map(note => (
                  <Day.Typography className="note" key={note._id} noteId={note._id}>
                    {note.title}
                  </Day.Typography>
                ))}
            </Day>
          ))}
        </Calendar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    date: state.date,
    notes: state.notes.notes,
    targetNoteId: state.target.targetNoteId
  };
};

export default connect(
  mapStateToProps,
  { modalToggle, selectDay, selectNote, changeInput, fetchNote }
)(NoteArea);
