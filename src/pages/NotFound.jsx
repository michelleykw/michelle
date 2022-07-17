import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid, Typography } from '@material-ui/core';
import ColoredHeader from '../components/ColoredHeader';
import MyButton from '../components/MyButton';
import SideBar from '../components/SideBar';
import { pages } from '../resources/constants';

const useStyles = makeStyles(theme => ({
    fullScreenHeight: {
        minHeight: "76vh"
    },
    textAlignCenter: {
        textAlign: "center"
    },
    content: {
        marginLeft: "1.5%",
        marginRight: "1.83%"
    },
    mb4mt12: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(2)
        }
    },
    mt1: {
        marginTop: theme.spacing(1)
    },
    mx1: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    }
}));

function NotFound() {
    const classes = useStyles();
    let history = useHistory();

    const theme = useTheme();
    const atLeastMediumScreen = useMediaQuery(theme.breakpoints.up('md'));

    const goToPage = href => {
        history.push(href);
    };

    const renderPagesButton = () => {
        return pages.map(({ href, label }) => {
            return (
                <MyButton 
                    content={label} 
                    className={!atLeastMediumScreen && classes.mt1} 
                    size={atLeastMediumScreen ? "small" : "large"} 
                    onClick={() => goToPage(href)} />
            );
        });
    };

    return (
        <Grid container alignItems="center" className={classes.fullScreenHeight}>
            {atLeastMediumScreen && <SideBar copy="Product Management | Tech | Blockchain | UI/UX" />}
            <Grid container sm={12} md={11} className={classes.content} justify="center" alignItems="center">
                <ColoredHeader copy="Oh no, the page can’t be found :(" className={`${classes.textAlignCenter} ${classes.mx1}`} />
                <Grid item xs={12} justifyItems="center">
                    <Typography variant="subtitle2" className={`${classes.textAlignCenter} ${classes.mb4mt12}`}>
                        Are you looking for any of the following pages?
                    </Typography>
                </Grid>
                <Grid item container xs={11} sm={10} md={9} lg={7} justify={atLeastMediumScreen ? "space-between" : "center"}>
                    {renderPagesButton()}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default NotFound;