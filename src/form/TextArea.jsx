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
        height: theme.spacing(13),
        padding: theme.spacing(1.5),
        fontSize: "1rem",
        fontFamily: "\"Merriweather\", serif",
        lineHeight: "160%",
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
        border: "1px solid",
        borderColor: theme.palette.primary.main,
        '&:focus': {
            outline: "none",
            borderRadius: theme.spacing(0),
            borderColor: theme.palette.primary[800],
            backgroundColor: theme.palette.primary[50],
            boxShadow: "0 0 4px #E2DEE5"
        }
    }
}));

function TextArea(props) {
    const { label, name, placeholder, required = false, ...rest } = props;
    const classes = useStyles();

    return (
        <Grid container item className={classes.formControl} justitfy="flex-start">
            <label htmlFor={name}>{`${label}${required ? ' *' : ''}`}</label>
            <Field as='textarea' id={name} name={name} placeholder={placeholder} cols={3} className={classes.component} {...rest} />
            {/*<ErrorMessage component={TextError} name={name} />*/}
        </Grid>
    );
}

export default TextArea;