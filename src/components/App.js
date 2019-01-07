import React from "react";
import Aside from "./Aside/Aside";
import NoteArea from "./NoteArea/NoteArea";
import Header from "./Header/Header";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div>
      <Header />
      <Grid container>
        <Grid item sm="2">
          <Aside />
        </Grid>
        <Grid item sm="10">
          <NoteArea />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
