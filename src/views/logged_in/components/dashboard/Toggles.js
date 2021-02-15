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
  InputLabel,
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
                    {toggle.type === "release"
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
                      : (<div>
                          <TextField variant="outlined" required label="Field" />
                        <FormControl variant="outlined">
                          <Select required
                            labelId="operation-drop-down"
                            // value={age}
                            // onChange={handleChange}
                          >
                            <MenuItem value={"eq"}>equal</MenuItem>
                            <MenuItem value={"ne"}>not equal</MenuItem>
                            <MenuItem value={"gt"}>grater than</MenuItem>
                            <MenuItem value={"ge"}>grater equal</MenuItem>
                            <MenuItem value={"lt"}>lower than</MenuItem>
                            <MenuItem value={"le"}>lower equal</MenuItem>
                          </Select>
                        </FormControl>
                          <TextField variant="outlined" required label="Value" />
                      <IconButton
                      className={classes.iconButton}
                      onClick={() => {
                        handleDeleteTargetDialogOpen(index);
                      }}
                      aria-label="Delete"
                    >
                      <DeleteIcon className={classes.blackIcon} />
                    </IconButton>
                    </div>)}
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
