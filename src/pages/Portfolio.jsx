import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ScrollToTop from '../components/ScrollToTop';
import PortfolioItem from '../components/PortfolioItem';
import { portfolios } from '../resources/constants';

const useStyles = makeStyles(theme => ({
    
}));

function Portfolio() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Grid container>
            {portfolios.map(item => <PortfolioItem item={item} isPortfolioPage={true}/>)}
            <ScrollToTop />
        </Grid>
    );
}

export default Portfolio;