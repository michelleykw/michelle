import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import SideBar from '../components/SideBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    content: {
        marginLeft: "1.5%",
        marginRight: "1.83%"
    },
    fullScreenHeight: {
        minHeight: "90vh"
    },
    textAlignCenter: {
        textAlign: "center"
    },
    mb1: {
        marginBottom: theme.spacing(1)
    },
    mt3: {
        marginTop: theme.spacing(3)
    },
    mt5: {
        marginTop: theme.spacing(5)
    }
}));

function PortfolioItem({ item, isPortfolioPage = false }) {
    const classes = useStyles();
    const { category, isHighlight, name, desc, imageHref, iframe } = item;

    const isHomePageContent = isPortfolioPage || (!isPortfolioPage && isHighlight);

    if (isHomePageContent) {
        return (
            <Grid container className={classes.fullScreenHeight} >
                {isPortfolioPage && <SideBar copy={category} />}
                <Grid container xs={isPortfolioPage ? 11 : 12} justify="center" className={`${!isHomePageContent && classes.content} ${classes.mt5}`}>
                    <Grid item xs={isPortfolioPage ? 11 : 10}>
                        <Grid container item xs={12} justify="space-between" className={classes.mb1}>
                            <Typography variant="h3">{name}</Typography>
                        </Grid>
                        <Typography variant="subtitle2" color="textSecondary">{desc}</Typography>
                        <Grid container item xs={12} justify="space-between" className={classes.mt3}>
                            {imageHref && <img src={imageHref} alt={`${category}: ${name}`} width="100%" height="auto" />}
                            {iframe}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

    return null;
}

export default PortfolioItem;