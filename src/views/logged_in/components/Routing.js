import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import Dashboard from "./dashboard/Dashboard";
import PropsRoute from "../../shared/components/PropsRoute";

const styles = (theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    width: "auto",
    [theme.breakpoints.up("xs")]: {
      width: "95%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "82.5%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

function Routing(props) {
  const {
    userId,
    classes,
    pushMessageToSnackbar,
    selectDashboard,
    isAccountActivated,
    accountActivation,
    projectUpsert,
  } = props;
  return (
    <div className={classes.wrapper}>
      <Switch>
        <PropsRoute
          path=""
          component={Dashboard}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectDashboard={selectDashboard}
          isAccountActivated={isAccountActivated}
          accountActivation={accountActivation}
          projectUpsert={projectUpsert}
          userId={userId}
        />
      </Switch>
    </div>
  );
}

Routing.propTypes = {
  userId: PropTypes.string,
  classes: PropTypes.object.isRequired,
  pushMessageToSnackbar: PropTypes.func,
  selectDashboard: PropTypes.func.isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  accountActivation: PropTypes.func,
  projectUpsert: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(memo(Routing));
