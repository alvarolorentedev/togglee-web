import React, { useCallback } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Table,

  IconButton,
  TableBody,
  TableCell,
  TableRow,
  withStyles
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EnhancedTableHead from "../../../shared/components/EnhancedTableHead";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  tableWrapper: {
    overflowX: "auto",
    width: "100%"
  },
  blackBackground: {
    backgroundColor: theme.palette.primary.main
  },
  contentWrapper: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2)
    },
    width: "100%"
  },
  dBlock: {
    display: "block !important"
  },
  dNone: {
    display: "none !important"
  },
  firstData: {
    paddingLeft: theme.spacing(3)
  }
});

const rows = [
  {
    id: "name",
    numeric: false,
    label: "Name"
  },
  {
    id: "type",
    numeric: false,
    label: "Type"
  },
  {
    id: "state",
    numeric: false,
    label: "State"
  },
  {
    id: "action",
    numeric: false,
    label: "Action"
  }
];

function SubscriptionTable(props) {
  const { toggles, classes } = props;


  const handleDeleteTargetDialogOpen = useCallback(
    (row) => {console.log("deleting row");},
    []
  );

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Toggles Project Awesome</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.dBlock}>
      {
        toggles.length > 0
        ? (
          <Table aria-labelledby="tableTitle">
          <EnhancedTableHead rowCount={toggles.length} rows={rows} />
          <TableBody>
            {toggles
              .map((toggle, index) => (
                <TableRow hover tabIndex={-1} key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.firstData}
                  >
                    {toggle.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {toggle.type}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {toggle.type === "release"
                      ? (toggle.value ? "On" : "Off")
                      : ""}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <IconButton
                      className={classes.iconButton}
                      onClick={() => {
                        handleDeleteTargetDialogOpen(index);
                      }}
                      aria-label="Delete"
                    >
                      <DeleteIcon className={classes.blackIcon} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        )
      : (<HighlightedInformation>
          No toggles defined yet.
        </HighlightedInformation>)
      }
      </AccordionDetails>
    </Accordion>
  )
}

SubscriptionTable.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  toggles: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles, { withTheme: true })(SubscriptionTable);
