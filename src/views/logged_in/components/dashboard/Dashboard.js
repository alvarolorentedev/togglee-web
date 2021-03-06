import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";
// import AccountInformationArea from "./AccountInformationArea";
import Toggles from "./Toggles";

function Dashboard(props) {
  const {
    user,
    selectDashboard,
    pushMessageToSnackbar,
    // isAccountActivated,
    // accountActivation,
    projectUpsert,
  } = props;

  const [projects, setProjects] = useState([]);
  useEffect(selectDashboard, [selectDashboard]);
  useEffect(() => {
    if(user)
      setProjects(user.projects)
  }, [user]);

  return (
    <Fragment>
      {/* <Box mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Your Account
        </Typography>
      </Box>
      <AccountInformationArea
        isAccountActivated={isAccountActivated}
        accountActivation={accountActivation}
      /> */}
      <Box mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Your Projects
        </Typography>
      </Box>
      {
        projects.map(project => (<Toggles
            pushMessageToSnackbar={pushMessageToSnackbar}
            project={project}
            onSend={(toggles) => projectUpsert(user.id, project.name, toggles)}
          />
        ))
      }
    </Fragment>
  );
}

Dashboard.propTypes = {
  user: PropTypes.string,
  pushMessageToSnackbar: PropTypes.func,
  selectDashboard: PropTypes.func.isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  accountActivation: PropTypes.func,
  projectUpsert: PropTypes.func,
};

export default Dashboard;
