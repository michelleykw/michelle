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
    imageGrid: {
        [theme.breakpoints.up('sm')]: {
            position: "relative",
            textAlign: "center",
            "&:hover": {  
                "& $image": {
                    opacity: 0.3,
                    zIndex: -1
                },
                "& $descGrid": {
                    opacity: 1,
                }
            }
        },
        [theme.breakpoints.down('xs')]: {
            
        }
    },
    image: {
        width: "100%",
        height: "auto",
        display: "block",
        opacity: 1,
        [theme.breakpoints.up('sm')]: {
            transition: ".5s ease",
            backfaceVisibility: "hidden",
        },
        [theme.breakpoints.down('xs')]: {
            
        }
    },
    descGrid: {
        [theme.breakpoints.up('sm')]: {
            transition: ".5s ease",
            opacity: 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            msTransform: "translate(-50%, -50%)",
            textAlign: "center"
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: theme.spacing(1)
        }
    },
    desc: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(3)
        }
    },
    mb1: {
        marginBottom: theme.spacing(1)
    },
    mb3: {
        marginBottom: theme.spacing(3)
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
    const { category, isHighlight, name, duration, desc, imageHref } = item;

    const isHomePageContent = isPortfolioPage || (!isPortfolioPage && isHighlight);

    function renderSideBar(copy, side) {
        return isPortfolioPage && atLeastMediumScreen && <SideBar copy={category} side={side} />;
    }

    function renderCategoryTag() {
        if (atLeastMediumScreen) {
            return (
                <Grid container>
                    <Typography variant="h6" className={classes.categoryStyle}>{category}</Typography>
                </Grid>
            );
        }
        
        return <Typography variant="h6" className={classes.categoryStyle}>{category}</Typography>;
    }

    function renderImageAndDesc() {
        // return <img src={images[0]} alt={`${category}: ${name}`} width="100%" height="auto" />;
        return (
            <Grid container item xs={12} justify="space-between" className={classes.imageGrid}>
                <Grid className={classes.descGrid}>
                    <Typography variant="subtitle2" color="textSecondary" className={atLeastMediumScreen && classes.desc}>
                        Contact me for more details and the Figma file
                    </Typography>
                </Grid>
                {imageHref.length > 0 && 
                    <img src={imageHref[0]} alt={`${category}: ${name}`} width="100%" height="auto" className={classes.image} />}
            </Grid>
        );
    }

    const renderImages = () => {
        if (imageHref.length === 1) {
            return renderImageAndDesc();
        }

        if (imageHref.length === 2) {
            return (
                <ImageList cols={2}>
                    {imageHref.map((href, index) => (
                        <ImageListItem key={`${name}-image${index}`}>
                            <img src={href} srcSet={href} alt={name} loading="lazy" />
                        </ImageListItem>
                    ))}
                </ImageList>
            );
        }

        return (
            <ImageList variant="masonry" cols={imageHref.length === 3 ? 2 : 3} gap={8}>
                {imageHref.map((href, index) => (
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
                {renderSideBar(category, "left")}
                <Grid container xs={(isPortfolioPage && atLeastMediumScreen) ? 11 : 12} justify="center" alignItems="center" className={`${classes.mt5} ${classes.mb3}`}>
                    <Grid item xs={(isPortfolioPage && atLeastMediumScreen) ? 11 : 10}>
                        {(atLeastMediumScreen && !isPortfolioPage) && renderCategoryTag()}
                        <Grid container item xs={12} justify="space-between" className={classes.mb1}>
                            <Grid container item xs={12} md={6} className={classes.pr1} justify="space-between" alignItems="center">
                                <Typography variant="h3">{name}</Typography>
                                {!atLeastMediumScreen && renderCategoryTag()}
                            </Grid>
                            <Grid container item xs={12} md={6}>
                                <Typography variant="subtitle2" color="textSecondary" className={atLeastMediumScreen && classes.textAlignRight}>{desc}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} justify="space-between" className={classes.mt3}>
                            {imageHref.length > 0 && renderImages()}
                        </Grid>
                    </Grid>
                </Grid>
                {renderSideBar(duration, "right")}
            </Grid>
        );
    }

    return null;
}

export default PortfolioItem;