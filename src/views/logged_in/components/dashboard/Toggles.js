import React, { useCallback } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Table,
  Switch,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Select,
  MenuItem,
  FormControl,
  withStyles
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EnhancedTableHead from "../../../shared/components/EnhancedTableHead";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";


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

const RELEASE_TOGGLE = "release"
const CONTEXT_TOGGLE = "context"

const TOGGLE_TYPES=[RELEASE_TOGGLE, CONTEXT_TOGGLE]
const CONTEXT_TOGGLE_OPERATIONS=[
  {
  name: "equal",
  id: "eq",
  },
  {
  name: "not equal",
  id: "ne",
  },
  {
  name: "grater than",
  id: "gt",
  },
  {
  name: "grater equal",
  id: "ge",
  },
  {
  name: "lower than",
  id: "lt",
  },
  {
  name: "lower equal",
  id: "le",
  },
]

function SubscriptionTable(props) {
  const { toggles, classes } = props;


  const handleDeleteTargetDialogOpen = useCallback(
    (row) => {console.log("deleting row");},
    []
  );

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Toggles</Typography>
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
                    <TextField variant="outlined" required label="Field" value={toggle.name}/>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <FormControl variant="outlined">
                      <Select required
                        labelId="operation-drop-down"
                        value={toggle.type}
                        // onChange={handleChange}
                      >
                        <MenuItem value={"release"}>release</MenuItem>
                        <MenuItem value={"context"}>context</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {toggle.type === RELEASE_TOGGLE
                      ? (
                        <Switch
                          color="secondary"
                          checked={toggle.value}
                          onClick={console.log}
                          inputProps={{
                            "aria-label": toggle.value
                              ? "Deactivate Toggle"
                              : "Activate Toggle"
                          }}
                        />)
                      : toggle.conditions.map((condition) => (<div>
                            <TextField variant="outlined" required label="Field" value={condition.field}/>
                            <FormControl variant="outlined">
                              <Select required
                                labelId="operation-drop-down"
                                value={condition.operation}
                                // onChange={handleChange}
                              >
                                {
                                  CONTEXT_TOGGLE_OPERATIONS.map((operation) => (
                                    <MenuItem value={operation.id}>{operation.name}</MenuItem>
                                  ))
                                }
                              </Select>
                            </FormControl>
                            <TextField variant="outlined" required label="Value" value={condition.value}/>
                        <IconButton
                        className={classes.iconButton}
                        onClick={() => {
                          handleDeleteTargetDialogOpen(index);
                        }}
                        aria-label="Delete"
                      >
                        <DeleteIcon className={classes.blackIcon} />
                      </IconButton>
                      </div>))
                      }
                  </TableCell>
                  <TableCell component="th" scope="row">
                    { 
                      toggle.type === "context" 
                      && <>
                        <IconButton
                          className={classes.iconButton}
                          onClick={() => {
                            // handleDeleteTargetDialogOpen(index);
                          }}
                          aria-label="Delete"
                        >
                          <AddIcon className={classes.blackIcon} />
                        </IconButton>
                      </>
                    }
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
