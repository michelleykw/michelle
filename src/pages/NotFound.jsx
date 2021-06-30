import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import MyButton from '../components/MyButton';
import { pages } from '../resources/constants';

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
        maxWidth: "5%",
        borderRightStyle: 'solid',
        borderRightWidth: 1,
        borderRightColor: theme.palette.text.primary,
    },
    leftBarValue: {
        transform: "rotate(270deg)",
        whiteSpace: "nowrap"
    },
    content: {
        marginLeft: "1.5%",
        marginRight: "1.83%"
    },
    mb4mt12: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(8)
    }
}));

function NotFound() {
    const classes = useStyles();
    let history = useHistory();

    const goToPage = href => {
        history.push(href);
    }

    const renderPagesButton = () => {
        return pages.map(({ href, label }) => <MyButton content={label} size="small" onClick={() => goToPage(href)} />);
    }

    return (
        <Grid container direction="row" alignItems="center">
            <Grid container item xs={1} className={classes.leftBar} justify="center" alignItems="center">
                <Typography variant="body2" className={classes.leftBarValue}>Download my full resume here</Typography>
            </Grid>
            <Grid container xs={11} className={classes.content} justify="center" alignItems="center">
                <Typography variant="h1" className={`${classes.gradientText} ${classes.textAlignCenter}`}>
                    Oh no, the page can’t be found :(
                </Typography>
                <Grid item xs={12} justifyItems="center">
                    <Typography variant="subtitle2" className={`${classes.textAlignCenter} ${classes.mb4mt12}`}>
                        Are you looking for any of the following pages?
                    </Typography>
                </Grid>
                <Grid item container sm={9} md={7} justify="space-between">{renderPagesButton()}</Grid>
            </Grid>
        </Grid>
    );
}

export default NotFound;