import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { collapseClasses, ImageList, ImageListItem } from '@mui/material';
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
    cardHover: {
        "&:hover": {  
            "& $image": {
                opacity: 0.3
            },
            // "& $cardHoverSection": {
            //     opacity: 1
            // }
        }
    },
    image: {
        opacity: 1,
        display: "block",
        width: "100%",
        height: "auto",
        transition: ".5s ease",
        backfaceVisibility: "hidden",
        "&:hover": {  
            "& $image": {
                opacity: 0.3
            },
            // "& $cardHoverSection": {
            //     opacity: 1
            // }
        }
    },
    cardHoverSection: {
        transition: ".5s ease",
        opacity: 0,
        position: "absolute",
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        msTransform: "translate(-50%, -50%)",
        textAlign: "center",
    },
    cardHoverContent: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(3),
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
            // return <img src={images[0]} alt={`${category}: ${name}`} width="100%" height="auto" />
            return (
                <Card className={classes.cardHover}>
                    <CardMedia
                        component="img"
                        width="100%" height="auto"
                        image={images[0]}
                        alt={`${category}: ${name}`}
                        className={classes.image}
                    />
                    <CardContent className={classes.cardHoverSection}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardHoverContent}>
                            Hover yayy
                        </Typography>
                    </CardContent>
                </Card>
            );
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