import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";
import AccountInformationArea from "./AccountInformationArea";
import Toggles from "./Toggles";

function Dashboard(props) {
  const {
    selectDashboard,
    pushMessageToSnackbar,
    isAccountActivated,
    toggleAccountActivation,
  } = props;

  useEffect(selectDashboard, [selectDashboard]);

  return (
    <Fragment>
      <Box mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Your Account
        </Typography>
      </Box>
      <AccountInformationArea
        isAccountActivated={isAccountActivated}
        toggleAccountActivation={toggleAccountActivation}
      />
      <Toggles
        pushMessageToSnackbar={pushMessageToSnackbar}
        toggles={[
          { 
            name: "myawesometoggle",
            type: "release",
            value: true
          },
          { 
            name: "myotherawesometoggle",
            type: "context",
            conditions: [{
              field: "a",
              value: "b",
              operation: "eq"
            }]
          },
      ]}
      />
    </Fragment>
  );
}

Dashboard.propTypes = {
  pushMessageToSnackbar: PropTypes.func,
  selectDashboard: PropTypes.func.isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  toggleAccountActivation: PropTypes.func,
};

export default Dashboard;
