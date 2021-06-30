import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    leftBar: {
        minHeight: "76vh",
        maxWidth: "5%",
        borderRightStyle: 'solid',
        borderRightWidth: 1,
        borderRightColor: theme.palette.text.primary,
    },
    leftBarValue: {
        transform: "rotate(270deg)",
        whiteSpace: "nowrap"
    }, 
    primaryColor: {
        color: theme.palette.primary.main
    }
}));

function SideBar({ side="left", copy }) {
    const classes = useStyles();

    return (
        <Grid container item xs={1} className={`${side === 'left' && classes.leftBar}`} justify="center" alignItems="center">
            <Typography variant="body2" className={`${classes.primaryColor} ${side === 'left' && classes.leftBarValue}`}>
                {copy}
            </Typography>
        </Grid>
    );
}

export default SideBar;