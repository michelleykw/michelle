import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    fullScreenHeight: {
        height: "76vh"
    },
}));

function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.fullScreenHeight}>
            <Typography variant="h3">Contact</Typography>
        </div>
    );
}

export default Contact;