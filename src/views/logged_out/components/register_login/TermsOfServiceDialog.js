import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  withStyles
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ColoredButton from "../../../shared/components/ColoredButton";

const styles = theme => ({
  termsConditionsListitem: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1)
  },
  dialogActions: {
    justifyContent: "flex-start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  backIcon: {
    marginRight: theme.spacing(1)
  }
});



function TermsOfServiceDialog(props) {
  const { classes, onClose, theme } = props;
  return (
    <Dialog open scroll="paper" onClose={onClose} hideBackdrop>
      <DialogTitle>Terms and Conditions</DialogTitle>
      <DialogContent>
        <Typography variant="h6" color="primary" paragraph>
          Terms
        </Typography>
        <Typography paragraph>
          By accessing this Website, accessible from www.togglee.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Use License
        </Typography>
        <Typography paragraph>
        Permission is granted to temporarily download one copy of the materials on togglee's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </Typography>
        <Typography className={classes.termsConditionsListitem}>
          - modify or copy the materials;
        </Typography>
        <Typography className={classes.termsConditionsListitem}>
          - use the materials for any commercial purpose or for any public display;
        </Typography>
        <Typography className={classes.termsConditionsListitem}>
          - attempt to reverse engineer any software contained on togglee's Website;
        </Typography>
        <Typography className={classes.termsConditionsListitem}>
          - remove any copyright or other proprietary notations from the materials; or
        </Typography>
        <Typography className={classes.termsConditionsListitem}>
          - transferring the materials to another person or "mirror" the materials on any other server.
        </Typography>
        <Typography className={classes.termsConditionsListitem} paragraph>
          - share personal account with another user, to overcome the usage of a diferent plan in case of teams, companies and organizations.
        </Typography>
        <Typography paragraph>
          This will let togglee to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. These Terms of Service has been created with the help of the Terms Of Service Generator and the Privacy Policy Generator.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Disclaimer
        </Typography>
        <Typography paragraph>
          All the materials on togglee’s Website are provided "as is". togglee makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, togglee does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Limitations
        </Typography>
        <Typography paragraph>
          togglee or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on togglee’s Website, even if togglee or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Revisions and Errata
        </Typography>
        <Typography paragraph>
          The materials appearing on togglee’s Website may include technical, typographical, or photographic errors. togglee will not promise that any of the materials in this Website are accurate, complete, or current. togglee may change the materials contained on its Website at any time without notice. togglee does not make any commitment to update the materials.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Links
        </Typography>
        <Typography paragraph>
          togglee has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by togglee of the site. The use of any linked website is at the user’s own risk.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Site Terms of Use Modifications
        </Typography>
        <Typography paragraph>
        togglee may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Your Privacy
        </Typography>
        <Typography paragraph>
          Please read <a href="https://www.freeprivacypolicy.com/live/125cbb54-8ff3-4cfa-9fa1-4522f131b695">our Privacy Policy.</a>
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Governing Law
        </Typography>
        <Typography paragraph>
          Any claim related to togglee's Website shall be governed by the laws of es without regards to its conflict of law provisions.
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <ColoredButton
          onClick={onClose}
          variant="contained"
          color={theme.palette.common.black}
        >
          <ArrowBackIcon className={classes.backIcon} />
          Back
        </ColoredButton>
      </DialogActions>
    </Dialog>
  );
}

TermsOfServiceDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TermsOfServiceDialog);
