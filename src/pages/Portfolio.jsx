import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import MyButton from '../components/MyButton';
import ScrollToTop from '../components/ScrollToTop';
import PortfolioItem from '../components/PortfolioItem';
import { portfolios, resumeUrl } from '../resources/constants';

const useStyles = makeStyles(theme => ({
    mb2: {
        marginBottom: theme.spacing(2)
    },
    mx2: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    pt2: {
        paddingTop: theme.spacing(2)
    },
    borderStyle: {
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: theme.palette.text.primary
    }
}));

function Portfolio() {
    const classes = useStyles();
    const history = useHistory();

    const viewResume = () => window.open(resumeUrl,'_blank');

    const goToAbout = () => history.push('/michelle/about');

    return (
        <Grid container>
            {portfolios.map(item => <PortfolioItem item={item} isPortfolioPage={true}/>)}
            <Grid container justify="center" className={`${classes.pt2} ${classes.borderStyle}`}>
                <MyButton content="View Resume" onClick={viewResume} className={`${classes.mx2} ${classes.mb2}`}/>
                <MyButton content="About Me" onClick={goToAbout} className={`${classes.mx2} ${classes.mb2}`}/>
            </Grid>
            <ScrollToTop />
        </Grid>
    );
}

export default Portfolio;