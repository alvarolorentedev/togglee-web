import React, { memo, useCallback, useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import Routing from "./Routing";
import NavBar from "./navigation/NavBar";
import ConsecutiveSnackbarMessages from "../../shared/components/ConsecutiveSnackbarMessages";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";
import persons from "../dummy_data/persons";
import { upsertProject } from "../../../services/project";
import { getUser } from "../../../services/user";

const styles = (theme) => ({
  main: {
    marginLeft: theme.spacing(9),
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function Main(props) {
  const { classes, location } = props;
  const [selectedTab, setSelectedTab] = useState(null);
  const [hasFetchedCardChart, setHasFetchedCardChart] = useState(false);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [pushMessageToSnackbar, setPushMessageToSnackbar] = useState(null);

  const fetchRandomMessages = useCallback(() => {
    shuffle(persons);
    const messages = [];
    const iterations = persons.length;
    const oneDaySeconds = 60 * 60 * 24;
    let curUnix = Math.round(
      new Date().getTime() / 1000 - iterations * oneDaySeconds
    );
    for (let i = 0; i < iterations; i += 1) {
      const person = persons[i];
      const message = {
        id: i,
        src: person.src,
        date: curUnix,
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.",
      };
      curUnix += oneDaySeconds;
      messages.push(message);
    }
    messages.reverse();
    setMessages(messages);
  }, [setMessages]);

  const fetchUserData = useCallback(async() => {
    setUser( await getUser(location.state.userId))
  }, [setUser, location]);

  const selectDashboard = useCallback(() => {
    smoothScrollTop();
    document.title = "Toggle - Dashboard";
    setSelectedTab("Dashboard");
    if (!hasFetchedCardChart) {
      setHasFetchedCardChart(true);
    }
  }, [
    setSelectedTab,
    hasFetchedCardChart,
    setHasFetchedCardChart,
  ]);

  const getPushMessageFromChild = useCallback(
    (pushMessage) => {
      setPushMessageToSnackbar(() => pushMessage);
    },
    [setPushMessageToSnackbar]
  );

  useEffect(() => {
    fetchUserData();
    fetchRandomMessages();
  }, [
    fetchRandomMessages,
    fetchUserData,
  ]);

  return (
    user && <Fragment>
      <NavBar
        selectedTab={selectedTab}
        messages={messages}
        user={user}
      />
      <ConsecutiveSnackbarMessages
        getPushMessageFromChild={getPushMessageFromChild}
      />
      <main className={classNames(classes.main)}>
        <Routing
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectDashboard={selectDashboard}
          isAccountActivated={() => console.error("Not Implemented")}
          accountActivation={() => console.error("Not Implemented")}
          projectUpsert={upsertProject}
          user={user}
        />
      </main>
    </Fragment>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Main));
