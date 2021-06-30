import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    button: {
        backgroundColor: theme.palette.primary[50],
        borderRadius: theme.spacing(5),
        height: theme.spacing(6),
        color: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText
        },
    },
    small: {
        minWidth: theme.spacing(20)
    },
    large: {
        minWidth: theme.spacing(30)
    }
}));

function MyButton({ content, onClick, icon, size = "large", variant, disabled = false, type = "button" }) {
    const classes = useStyles();

    return (
        <Button
            disabled={disabled}
            variant={variant || "outlined"}
            startIcon={icon}
            onClick={onClick}
            type={type}
            className={`${classes.button} ${classes[size]}`}
        >
            {content}
        </ Button>
    );
}

export default MyButton;