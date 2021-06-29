import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: "76vh",
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(4)
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3)
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2)
        }
    },
    gradientText: {
        background: "-webkit-linear-gradient(#355C7D, #6C5B7B, #C67B90)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        paddingBottom: theme.spacing(2)
    },
    textAlignCenter: {
        textAlign: "center"
    },
    leftBar: {
        minHeight: "76vh",
        borderRightStyle: 'solid',
        borderRightWidth: 1,
        borderRightColor: theme.palette.text.primary,
    }
}));



function NotFound() {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid xs={1} className={classes.leftBar}>mm</Grid>
            <Grid xs={11}>
                <Typography variant="h1" className={classes.gradientText}>
                    Oh no, the page can’t be found :(
                </Typography>
            
                <Typography variant="subtitle2">
                    Are you looking for any of the following pages?
                </Typography>
            </Grid>
        </Grid>
    );
}

export default NotFound;