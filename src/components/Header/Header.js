import React from "react";
import { connect } from "react-redux";
import { addMonth, reduceMonth } from "../../actions/date";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function Header({ month, year, reduceMonth, addMonth }) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Calendar
          </Typography>
          <Button color="inherit" onClick={reduceMonth}>pre</Button>
          <Typography variant="h6" color="inherit">
            {year}
          </Typography>
          <Typography variant="h6" color="inherit">
            {month}
          </Typography>
          <Button color="inherit" onClick={addMonth}>post</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    month: state.date.month,
    year: state.date.year
  };
};

export default connect(
  mapStateToProps,
  { addMonth, reduceMonth }
)(Header);
