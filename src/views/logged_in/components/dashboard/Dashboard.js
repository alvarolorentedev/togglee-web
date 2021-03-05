import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";
import AccountInformationArea from "./AccountInformationArea";
import Toggles from "./Toggles";

function Dashboard(props) {
  const {
    userId,
    selectDashboard,
    pushMessageToSnackbar,
    isAccountActivated,
    accountActivation,
    projectUpsert,
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
    setToggles([])
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
        accountActivation={accountActivation}
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
        onSend={() => projectUpsert(userId, "Default", toggles)}
      />
    </Fragment>
  );
}

Dashboard.propTypes = {
  userId: PropTypes.string,
  pushMessageToSnackbar: PropTypes.func,
  selectDashboard: PropTypes.func.isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  accountActivation: PropTypes.func,
  projectUpsert: PropTypes.func,
};

export default Dashboard;
