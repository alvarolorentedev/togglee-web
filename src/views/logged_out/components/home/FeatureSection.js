import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import MeassageIcon from "@material-ui/icons/Message";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";

const iconSize = 30;

const features = [
  {
    color: "#00C853",
    headline: "Simple",
    text:
      "We believe anyone should be able to interact with activation of features not only developers",
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#6200EA",
    headline: "Polyglot",
    text:
      "We support multiple languages and we will want to support the all to help everyone",
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#0091EA",
    headline: "Seamless",
    text:
      "The activation of features will refresh continuously so you don't need to rely on the release cycle to solve issues",
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  }
];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Features
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map(element => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);
