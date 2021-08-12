import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
    },
    logo: {
        height: "8em",
    },
    tabContainers: {
        marginLeft: "auto",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
}));

export default function Header(props) {
    const classes = useStyles();

    const [value, setValue] = useState(0);

    const handleChange = (e, v) => {
        setValue(v);
    };

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0);
        } else if (window.location.pathname === "/services" && value !== 1) {
            setValue(1);
        } else if (window.location.pathname === "/revolution" && value !== 2) {
            setValue(2);
        } else if (window.location.pathname === "/about" && value !== 3) {
            setValue(3);
        } else if (window.location.pathname === "/contact" && value !== 4) {
            setValue(4);
        } else if (window.location.pathname === "/estimate" && value !== 5) {
            setValue(5);
        }
    }, [value]);

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar disableGutters>
                        <Button
                            component={Link}
                            to="/"
                            onClick={() => {
                                setValue(0);
                            }}
                            className={classes.logoContainer}
                            disableRipple
                        >
                            <img
                                src={logo}
                                alt="Company Logo"
                                className={classes.logo}
                            />
                        </Button>
                        <Tabs
                            className={classes.tabContainers}
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                        >
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to="/"
                                label="Home"
                            />
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to="/services"
                                label="Services"
                            />
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to="/revolution"
                                label="The Revolution"
                            />
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to="about"
                                label="About Us"
                            />
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to="contact"
                                label="Contact Us"
                            />
                        </Tabs>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            component={Link}
                            to="estimate"
                        >
                            Free Estimate
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </>
    );
}
