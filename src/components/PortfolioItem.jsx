import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ImageList, ImageListItem } from '@mui/material';
import SideBar from '../components/SideBar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
    fullScreenHeight: {
        minHeight: "90vh"
    },
    categoryStyle: {
        backgroundColor: theme.palette.primary[100],
        padding: theme.spacing(1)
    },
    textAlignCenter: {
        textAlign: "center"
    },
    textAlignRight: {
        textAlign: "right"
    },
    mb1: {
        marginBottom: theme.spacing(1)
    },
    mb3: {
        marginBottom: theme.spacing(3)
    },
    mt3: {
        marginTop: theme.spacing(3)
    },
    mt5: {
        marginTop: theme.spacing(5)
    },
    pr1: {
        paddingRight: theme.spacing(1)
    }
}));

function PortfolioItem({ item, isPortfolioPage = false }) {
    const classes = useStyles();
    const theme = useTheme();
    const atLeastMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
    const { category, isHighlight, name, duration, desc, imageHref, iframe } = item;

    const isHomePageContent = isPortfolioPage || (!isPortfolioPage && isHighlight);

    const renderImages = images => {
        if (images.length === 1) {
            return <img src={images[0]} alt={`${category}: ${name}`} width="100%" height="auto" />
        }

        if (images.length === 2) {
            return (
                <ImageList cols={2}>
                    {images.map((href, index) => (
                        <ImageListItem key={`${name}-image${index}`}>
                            <img src={href} srcSet={href} alt={name} loading="lazy" />
                        </ImageListItem>
                    ))}
                </ImageList>
            );
        }

        return (
            <ImageList variant="masonry" cols={images.length === 3 ? 2 : 3} gap={8}>
                {images.map((href, index) => (
                    <ImageListItem key={`${name}-image${index}`}>
                        <img src={href} srcSet={href} alt={name} loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
        );
    };

    if (isHomePageContent) {
        return (
            <Grid container className={`${classes.fullScreenHeight}`}>
                {isPortfolioPage && atLeastMediumScreen && <SideBar copy={category} />}
                <Grid container xs={(isPortfolioPage && atLeastMediumScreen) ? 11 : 12} justify="center" alignItems="center" className={`${classes.mt5} ${classes.mb3}`}>
                    <Grid item xs={(isPortfolioPage && atLeastMediumScreen) ? 11 : 10}>
                        {(atLeastMediumScreen && !isPortfolioPage) && (
                            <Grid container>
                                <Typography variant="h6" className={classes.categoryStyle}>{category}</Typography>
                            </Grid>
                        )}
                        <Grid container item xs={12} justify="space-between" className={classes.mb1}>
                            <Grid container item xs={12} md={6} className={classes.pr1} justify="space-between" alignItems="center">
                                <Typography variant="h3">{name}</Typography>
                                {!atLeastMediumScreen && (
                                    <Typography variant="h6" className={classes.categoryStyle}>{category}</Typography>
                                )}
                            </Grid>
                            <Grid container item xs={12} md={6}>
                                <Typography variant="subtitle2" color="textSecondary" className={atLeastMediumScreen && classes.textAlignRight}>{desc}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} justify="space-between" className={classes.mt3}>
                            {imageHref.length > 0 && renderImages(imageHref)}
                            {iframe}
                        </Grid>
                    </Grid>
                </Grid>
                {isPortfolioPage && atLeastMediumScreen && <SideBar copy={duration} side="right" />}
            </Grid>
        );
    }

    return null;
}

export default PortfolioItem;