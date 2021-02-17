import React from "react";
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
  Button,
  withStyles
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EnhancedTableHead from "../../../shared/components/EnhancedTableHead";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import LoopIcon from "@material-ui/icons/Loop";
import { v4 as uuid } from 'uuid';


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

function TogglesTable(props) {
  const { toggles, onUpdate, onCreate, onSend, onDelete, classes } = props;


  const updateCondition = (toggleIndex, conditions, index, value) =>
    onUpdate(toggleIndex, "conditions", conditions.map((condition, indexToChange) => index === indexToChange ? value : condition))

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Toggles</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.dBlock}>
        <form onSubmit={(e) => {
          e.preventDefault();
          onSend();
        }}>
      {
        toggles.length > 0
        ? (
          <Table aria-labelledby="tableTitle">
          <EnhancedTableHead rowCount={toggles.length} rows={rows} />
          <TableBody>
            {toggles
              .map((toggle, index) => (
                <TableRow key={`toggle_${index}`} hover tabIndex={-1}>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.firstData}
                  >
                    <TextField required
                      variant="outlined"
                      label="Field" 
                      value={toggle.name} 
                      onChange={(event) => onUpdate(index, "name", event.target.value)}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <FormControl variant="outlined">
                      <Select required
                        labelId="operation-drop-down"
                        value={toggle.type}
                        onChange={(event) => onUpdate(index, "type", event.target.value)}
                      >
                        {
                          TOGGLE_TYPES.map(toggleType => (
                            <MenuItem key={`toggleType${uuid()}`} value={toggleType}>{toggleType}</MenuItem>
                          ))
                        }
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {toggle.type === RELEASE_TOGGLE
                      ? (
                        <Switch
                          color="secondary"
                          checked={toggle.value}
                          onChange={event => onUpdate(index, "value", event.target.checked)}
                          inputProps={{
                            "aria-label": toggle.value
                              ? "Deactivate Toggle"
                              : "Activate Toggle"
                          }}
                        />)
                      : toggle.conditions.map((condition, indexCondition) => (<div key={`toggle_${index}_condition_${indexCondition}`}>
                            <TextField  variant="outlined" required label="Field" value={condition.field} onChange={event => updateCondition(index, toggle.conditions, indexCondition, {...condition, field: event.target.value})}/>
                            <FormControl variant="outlined">
                              <Select required
                                labelId="operation-drop-down"
                                value={condition.operation}
                                onChange={event => updateCondition(index, toggle.conditions, indexCondition, {...condition, operation: event.target.value})}
                              >
                                {
                                  CONTEXT_TOGGLE_OPERATIONS.map((operation) => (
                                    <MenuItem key={`OperationType${uuid()}`} value={operation.id}>{operation.name}</MenuItem>
                                  ))
                                }
                              </Select>
                            </FormControl>
                            <TextField variant="outlined" required label="Value" value={condition.value} onChange={event => updateCondition(index, toggle.conditions, indexCondition, {...condition, value: event.target.value})}/>
                        <IconButton
                        className={classes.iconButton}
                        onClick={() => {
                          onUpdate(index, "conditions", toggle.conditions.filter((_, indexDelete) => indexCondition !== indexDelete));
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
                            onUpdate(index, "conditions", [...toggle.conditions, { operation: "eq"}]);
                          }}
                          aria-label="Delete"
                        >
                          <AddIcon className={classes.blackIcon} />
                        </IconButton>
                      </>
                    }
                    <IconButton
                      className={classes.iconButton}
                      onClick={() => onDelete(index)}
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
      <Button variant="contained" color="primary" aria-label="add" onClick={onCreate}>
      <AddIcon/> Add
      </Button>
      <Button type="submit" variant="contained" color="primary" aria-label="add">
      <LoopIcon/> Update
      </Button>
      </form>
      </AccordionDetails>
    </Accordion>
  )
}

TogglesTable.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  toggles: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles, { withTheme: true })(TogglesTable);
