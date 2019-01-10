import React from "react";
import { connect } from "react-redux";
import { increaseMonth, reduceMonth } from "../../actions/date";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function Header({ date, reduceMonth, increaseMonth }) {
  let { year, month } = date;
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Calendar
          </Typography>
          <div style={{ display: "flex", margin: "auto" }}>
            <Button color="inherit" onClick={reduceMonth}>
              <ArrowLeftIcon />
            </Button>
            <Typography variant="h6" color="inherit">
              {year}年{month}月
            </Typography>
            <Button color="inherit" onClick={increaseMonth}>
              <ArrowRightIcon />
            </Button>
          </div>
          <div>{" "}</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    date: state.date
  };
};
export default connect(
  mapStateToProps,
  { reduceMonth, increaseMonth }
)(Header);
