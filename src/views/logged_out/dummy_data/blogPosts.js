import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";

const posts = [
  {
    title: "Welcome",
    id: 1,
    date: 1576281600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost1.jpg`,
    snippet:
      "Welcome. This is an empty blog for now but we will add more content soon.",
    content: (<Fragment>
      <Typography variant="h6" paragraph>
        Welcome. This is an empty blog for now but we will add more content soon.
      </Typography>
    </Fragment>),
  }
];

export default posts;