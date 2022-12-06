import React from 'react';
import { useHistory } from "react-router-dom";
import { Chip, Grid, Typography } from '@material-ui/core';
import { ImageList, ImageListItem } from '@mui/material';
import SideBar from './SideBar';
import MyButton from './MyButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
    fullScreenHeight: {
        minHeight: "90vh"
    },
    portfolioCard: {
        border: "1px solid",
        borderColor: theme.palette.primary.main,
        borderRadius: theme.spacing(3),
        margin: theme.spacing(1),
        padding: theme.spacing(2),
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
                    opacity: 0.4,
                    zIndex: 0
                },
                "& $descGrid": {
                    opacity: 1,
                    zIndex: 1
                }
            }
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
    const history = useHistory();
    const atLeastSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const atLeastMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
    const { category, isHighlight, name, duration, desc, imageHref } = item;

    const goToContact = () => history.push(`/michelle/contact?subject=Interested%20to%20know%20more%20about%20${name}`);

    function renderSideBar(copy, side) {
        return isPortfolioPage && atLeastMediumScreen && <SideBar copy={category} side={side} />;
    }

    function renderCategoryTag() {     
        return (
            <Grid item>
                <Chip label={category} color="primary" variant="outlined" />
            </Grid>
        );
    }

    function renderImageAndDesc() {
        return (
            <Grid container item xs={12} justify="space-between" className={classes.imageGrid}>
                {atLeastSmallScreen && (
                    <Grid className={classes.descGrid}>
                        <MyButton 
                            content="Contact me for more details" 
                            onClick={goToContact}
                            className={classes.desc}
                        />
                    </Grid>
                )}
                <img src={imageHref[0]} alt={`${category}: ${name}`} width="100%" height="auto" className={classes.image} />
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

    const fullDisplay = isPortfolioPage || (!isPortfolioPage && isHighlight);
    if (fullDisplay) {
        return (
            <Grid container className={`${classes.fullScreenHeight}`}>
                {renderSideBar(category, "left")}
                <Grid container xs={(isPortfolioPage && atLeastMediumScreen) ? 11 : 12} justify="center" alignItems="center" className={`${classes.mt5} ${classes.mb3}`}>
                    <Grid item xs={(isPortfolioPage && atLeastMediumScreen) ? 11 : 10}>
                        <Grid container justify="space-between" alignItems="flex-end" className={classes.mb1}>
                            <Grid 
                                container item xs={12} md={6} className={classes.pr1} 
                                justify={atLeastMediumScreen ? "flex-end": "space-between"} 
                                direction={atLeastMediumScreen ? "column-reverse" : "row"} 
                                alignItems={!atLeastMediumScreen && "center"}
                            >
                                <Typography variant="h3">{name}</Typography>
                                {(!isPortfolioPage || !atLeastMediumScreen) && renderCategoryTag()}
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