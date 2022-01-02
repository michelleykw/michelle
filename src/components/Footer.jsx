import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography
} from '@material-ui/core';
import { socials } from '../resources/constants';

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: theme.palette.primary[800]
    },
    toolBar: {
        justifyContent: "center",
        minHeight: theme.spacing(7)
    },
    socialMediaBar: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: theme.palette.text.primary,
    }
}));

function Footer() {
    const classes = useStyles();
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const setResponsiveness = () => {
            if (window.innerWidth < 480) {
                setIsMobileView(true);
            } else {
                setIsMobileView(false);
            }
        }
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    return (
        <AppBar position="static" className={classes.appBar} id="footer">
            <Toolbar className={`${classes.socialMediaBar} ${classes.toolBar}`}>
                {socials.map(({ label, icon, href}) => {
                    return isMobileView 
                        ? <IconButton color="primary" href={href} target="_blank">{icon}</IconButton>
                        : <Button href={href} target="_blank">{label}</Button>;
                })}
            </Toolbar>
            <Toolbar className={classes.toolBar}>
              <Typography variant="body1" color="inherit">
                © 2022 by Michelle Yong;
              </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;