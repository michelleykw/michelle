import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    leftBar: {
        minHeight: "76vh",
        maxWidth: "4.16%",
        borderRightStyle: 'solid',
        borderRightWidth: 1,
        borderRightColor: theme.palette.text.primary
    },
    leftBarValue: {
        transform: "rotate(270deg)",
    }, 
    rightBar: {
        minHeight: "76vh",
        maxWidth: "4.16%",
        borderLeftStyle: 'solid',
        borderLeftWidth: 1,
        borderLedttColor: theme.palette.text.primary
    },
    rightBarValue: {
        transform: "rotate(90deg)",
    }
}));

function SideBar({ side="left", copy }) {
    const classes = useStyles();

    return (
        <Grid container item className={`${side === 'left' ? classes.leftBar : classes.rightBar}`} justify="center" alignItems="center">
            <Grid className={`${side === 'left' ? classes.leftBarValue : classes.rightBarValue}`}>
                <Typography variant="body2" noWrap>
                    {copy}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default SideBar;