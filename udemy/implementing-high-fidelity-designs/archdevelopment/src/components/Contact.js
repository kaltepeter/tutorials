import react, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/button";
import ButtonArrow from "./ui/ButtonArrow";

import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";
import {
  Dialog,
  DialogContent,
  TextField,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
    marginTop: "5em",
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  const onChange = (event) => {
    let valid;
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("Invalid phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h2"
                style={{ lineHeight: 1 }}
                align={matchesMD ? "center" : undefined}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                style={{ color: theme.palette.common.blue }}
                align={matchesMD ? "center" : undefined}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: ".5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="tel:5555555555"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="envelope"
                  style={{ marginRight: ".5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="mailto:zachary@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    zachary@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{ marginBottom: ".5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  value={name}
                  fullWidth
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: ".5em" }}>
                <TextField
                  label="Email"
                  id="email"
                  value={email}
                  fullWidth
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: ".5em" }}>
                <TextField
                  label="Phone"
                  id="phone"
                  value={phone}
                  fullWidth
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                value={message}
                multiline
                rows={10}
                id="message"
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                fullWidth
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: "2em" }}
            >
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  emailHelper.length !== 0 ||
                  phoneHelper.length !== 0
                }
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                Send Message{" "}
                <img
                  src={airplane}
                  alt="paper airplane"
                  style={{ marginLeft: "1em" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        fullScreen={matchesXS}
        style={{ zIndex: 1302 }}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
          },
        }}
        onClose={() => setOpen(false)}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: ".5em" }}>
              <TextField
                label="Name"
                id="name"
                value={name}
                fullWidth
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: ".5em" }}>
              <TextField
                label="Email"
                id="email"
                value={email}
                fullWidth
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: ".5em" }}>
              <TextField
                label="Phone"
                id="phone"
                value={phone}
                fullWidth
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
            <TextField
              value={message}
              multiline
              rows={10}
              id="message"
              InputProps={{ disableUnderline: true }}
              className={classes.message}
              fullWidth
              onChange={(event) => setMessage(event.target.value)}
            />
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
            alignItems="center"
          >
            <Grid item>
              <Button
                style={{ fontWeight: 300 }}
                color="primary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  emailHelper.length !== 0 ||
                  phoneHelper.length !== 0
                }
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                Send Message
                <img
                  src={airplane}
                  alt="paper airplane"
                  style={{ marginLeft: "1em" }}
                />
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        alignItems="center"
        justifyContent={matchesMD ? "center" : undefined}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                Simple Software.
                <br /> Revolutionary Results.
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ fontSize: "1.5rem" }}
                align={matchesMD ? "center" : undefined}
              >
                Take advantage of the 21st century.
              </Typography>
              <Grid container justify={matchesMD ? "center" : undefined} item>
                <Button
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn More </span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/estimate"
            variant="contained"
            className={classes.estimateButton}
            onClick={() => props.setValue(false)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
