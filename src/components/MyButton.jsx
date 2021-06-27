import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    button: {
        backgroundColor: theme.palette.primary[50],
        borderRadius: theme.spacing(5),
        minWidth: theme.spacing(30),
        height: theme.spacing(6),
        color: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText
        },
    },
}));

function MyButton({ content, onClick, icon, size, variant, disabled = false }) {
    const classes = useStyles();

    return (
        <Button
            disabled={disabled}
            variant={variant || "outlined"}
            startIcon={icon}
            onClick={onClick}
            className={classes.button}
        >
            {content}
        </ Button>
    );
}

export default MyButton;