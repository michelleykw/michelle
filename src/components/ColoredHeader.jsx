import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    gradientText: {
        background: "-webkit-linear-gradient(#355C7D, #6C5B7B, #C67B90)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        paddingBottom: theme.spacing(1.5)
    }
}));

function ColoredHeader({ copy, variant="h1", className }) {
    const classes = useStyles();

    return (
        <Typography variant={variant} className={`${classes.gradientText} ${className}`}>
            {copy}
        </Typography>
    );
}

export default ColoredHeader;