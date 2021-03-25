import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Typography, Box, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Toggles from "./Toggles";
import AccountInformationArea from "./AccountInformationArea";

function Dashboard(props) {
  const {
    user,
    selectDashboard,
    pushMessageToSnackbar,
    projectUpsert,
    toggleAccountActivation
  } = props;

  const [projects, setProjects] = useState([]);
  useEffect(selectDashboard, [selectDashboard]);
  useEffect(() => {
    if(user)
      setProjects(user.projects)
  }, [user]);

  return (
    <Fragment>
    <AccountInformationArea
      isAccountActivated={false}
      toggleAccountActivation={toggleAccountActivation}
    />
      <Box mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Your Projects
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          aria-label="add" 
          disabled={projects.length > 0 }
          onClick={() => {setProjects([...projects, {
            name: `Default${projects.length+1}`,
            toggles: []
          }])}}>
        <AddIcon/> Add
        </Button>
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
  toggleAccountActivation: PropTypes.func,
  projectUpsert: PropTypes.func,
};

export default Dashboard;
