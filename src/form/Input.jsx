import React from 'react';
import { Grid } from '@material-ui/core';
import { Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    formControl: {
        marginBottom: theme.spacing(2)
    },
    component: {
        display: "block",
        width: "100%",
        height: theme.spacing(6),
        padding: "6px 12px",
        fontSize: "1rem",
        fontFamily: "\"Merriweather\", serif",
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
        border: "1px solid",
        borderColor: theme.palette.primary.main
    }
}));

function Input(props) {
    const { label, name, placeholder, required = false, ...rest } = props;
    const classes = useStyles();

    return (
        <Grid container item className={classes.formControl} justitfy="flex-start">
            <label htmlFor={name}>{`${label}${required ? ' *' : ''}`}</label>
            <Field id={name} name={name} placeholder={placeholder} className={classes.component} {...rest} />
            {/*<ErrorMessage component={TextError} name={name} />*/}
        </Grid>
    );
}

export default Input;