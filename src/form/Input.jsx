import React from 'react';
import { Grid } from '@material-ui/core';
import { ErrorMessage, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import ErrorComponent from './ErrorComponent';

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
        borderRadius: theme.spacing(0),
        borderColor: theme.palette.primary.main,
        '&:focus': {
            outline: "none",
            borderRadius: theme.spacing(0),
            borderColor: theme.palette.primary[800],
            backgroundColor: theme.palette.primary[50],
            boxShadow: "0 0 4px #E2DEE5"
        }
    },
    hasError: {
        color: theme.palette.error.main,
        borderColor: theme.palette.error.main,
        '&:focus': {
            borderColor: theme.palette.error.dark,
            backgroundColor: theme.palette.error[50],
            boxShadow: "0 0 4px #FEF8F8"
        }
    },
    mbQuarter: {
        marginBottom: theme.spacing(0.25)
    }
}));

function Input(props) {
    const { label, name, placeholder, required = false, hasError = false, ...rest } = props;
    const classes = useStyles();

    return (
        <Grid container item className={classes.formControl} justitfy="flex-start">
            <Grid container item xs={12} justify="space-between" className={classes.mbQuarter}>
                <Grid item>
                    <label htmlFor={name} className={hasError && classes.hasError}>{`${label}${required ? ' *' : ''}`}</label>
                </Grid>
                <ErrorMessage name={name} component={ErrorComponent} />
            </Grid>
            <Field id={name} name={name} placeholder={placeholder} className={`${classes.component} ${hasError && classes.hasError}`} {...rest} />
        </Grid>
    );
}

export default Input;