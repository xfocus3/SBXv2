import React from "react";
import { Grid } from "material-ui";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
const styles = { Paper: { padding: 20, marginTop: 10, marginBottom: 10 } };
export default props => (
  <Grid container>
    <Grid item xs>
      <LeftPanel styles={styles} />
    </Grid>
    <Grid item xs>
      <RightPanel styles={styles} />
    </Grid>
  </Grid>
);
