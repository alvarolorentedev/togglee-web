import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import SettingsArea from "./SettingsArea";

function Dashboard(props) {
  const {
    selectDashboard,
    pushMessageToSnackbar,
  } = props;

  useEffect(selectDashboard, [selectDashboard]);

  return (
    <Fragment>
      <Box mt={4}>
      </Box>
      <SettingsArea pushMessageToSnackbar={pushMessageToSnackbar} />
    </Fragment>
  );
}

Dashboard.propTypes = {
  pushMessageToSnackbar: PropTypes.func,
  selectDashboard: PropTypes.func.isRequired,
};

export default Dashboard;
