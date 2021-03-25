import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Typography, Box, Button, withStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Toggles from "./Toggles";
import AccountInformationArea from "./AccountInformationArea";

const styles = theme => ({
  ProjectBox: {
    marginBottom: theme.spacing(1),
  }
})
function Dashboard(props) {
  const {
    user,
    selectDashboard,
    pushMessageToSnackbar,
    projectUpsert,
    toggleAccountActivation,
    classes
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
      <Box display="flex" flexDirection="row" justifyContent="flex-end" mt={4} className={classes.ProjectBox}>
      <Box width="100%" ><Typography variant="subtitle1" gutterBottom>
          Your Projects
        </Typography></Box>
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Dashboard);