import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";

function Home(props) {
  const { selectHome, openRegisterDialog } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection openRegisterDialog={openRegisterDialog} />
      <FeatureSection />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
  openRegisterDialog: PropTypes.func.isRequired,
};

export default Home;
