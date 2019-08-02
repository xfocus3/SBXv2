import React from "react";
import { Paper, Tabs } from "material-ui";
import { Tab } from "material-ui/Tabs";

export default ({ muscules }) => (
  <Paper>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab label="All" />
      {muscules.map(groupe => (
        <Tab label={groupe} />
      ))}
    </Tabs>
  </Paper>
);
