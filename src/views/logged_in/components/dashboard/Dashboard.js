import React, { Fragment, useEffect, useState } from "react";
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

  const [toggles, setToggles] = useState([]);
  const updateToggle = (index, field, value) => {
    const newToggles = toggles
      .map((toggle, indexToChange) => index === indexToChange 
                  ? {...toggle, [field]: value } 
                  : toggle )
    setToggles(newToggles)
  }
  const onCreateToggle = () => {
    setToggles([...toggles, {name: undefined,
      type: "release",
      conditions: [],
      value: false}])
  }
  const onDeleteToggle = (index) => {
    setToggles(toggles.filter((_, indexDelete) => index !== indexDelete))
  }
  useEffect(selectDashboard, [selectDashboard]);
  useEffect(() => {
    setToggles([
      { 
        name: "myawesometoggle",
        type: "release",
        value: true,
        conditions: []
      },
      { 
        name: "myotherawesometoggle",
        type: "context",
        value: false,
        conditions: [{
          field: "a",
          value: "b",
          operation: "eq"
        }]
      },
  ])
  }, []);

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
      <Box mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Your Projects
        </Typography>
      </Box>
      <Toggles
        pushMessageToSnackbar={pushMessageToSnackbar}
        toggles={toggles}
        onUpdate={updateToggle}
        onCreate={onCreateToggle}
        onDelete={onDeleteToggle}
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
