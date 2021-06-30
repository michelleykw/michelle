import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import ColoredHeader from '../components/ColoredHeader';
import MyButton from '../components/MyButton';
import SideBar from '../components/SideBar';
import { pages } from '../resources/constants';

const useStyles = makeStyles(theme => ({
    textAlignCenter: {
        textAlign: "center"
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
        <Grid container alignItems="center">
            <SideBar copy="Download Michelle's full resume" />
            <Grid container xs={11} className={classes.content} justify="center" alignItems="center">
                <ColoredHeader copy="Oh no, the page can’t be found :(" className={classes.textAlignCenter} />
                <Grid item xs={12} justifyItems="center">
                    <Typography variant="subtitle2" className={`${classes.textAlignCenter} ${classes.mb4mt12}`}>
                        Are you looking for any of the following pages?
                    </Typography>
                </Grid>
                <Grid item container xs={12} sm={10} md={9} lg={7} justify="space-between">{renderPagesButton()}</Grid>
            </Grid>
        </Grid>
    );
}

export default NotFound;