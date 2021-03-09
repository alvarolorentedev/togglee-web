import React from "react";
import PropTypes from "prop-types";
import {
  Paper,
  Toolbar,
  ListItemText,
  Box,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  paper: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  toolbar: { justifyContent: "space-between" },
  scaleMinus: {
    transform: "scaleX(-1)"
  },
  "@keyframes spin": {
    from: { transform: "rotate(359deg)" },
    to: { transform: "rotate(0deg)" }
  },
  spin: { animation: "$spin 2s infinite linear" },
  listItemSecondaryAction: { paddingRight: theme.spacing(1) }
});

function AccountInformationArea(props) {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <Box mr={2}>
            <ListItemText
              primary="Plan"
              secondary={"Hobby"}
              className="mr-2"
            />
          </Box>
        </Box>
      </Toolbar>
    </Paper>
  );
}

AccountInformationArea.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  accountActivation: PropTypes.func.isRequired,
  isAccountActivated: PropTypes.bool.isRequired
};

export default withStyles(styles, { withTheme: true })(AccountInformationArea);
