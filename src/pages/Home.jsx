import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MyButton from '../components/MyButton';
import ScrollToTop from '../components/ScrollToTop';
import { introduction } from '../resources/constants';
import background from '../resources/background.png';
import hero from '../resources/hero.png';

const useStyles = makeStyles(theme => ({
    hoverCursor: {
        '&:hover': {
            color: theme.palette.text.primary,
            '& $cursor': {
                transform: "translate(-50%, -50%) scale(1.7)",
                border: "1px solid",
                borderColor: theme.palette.common.teakMustard[100],
                backgroundColor: theme.palette.common.teakMustard[100],
                mixBlendMode: "difference",
                backfaceVisibility: "hidden"
            },
            '& $cursorDot': {
                mixBlendMode: "difference",
                opacity: 0,
                backfaceVisibility: "hidden"
            }
        }
    },
    cursor: {
        width: "50px",
        height: "50px",
        border: "1px solid",
        borderColor: theme.palette.primary.dark,
        borderRadius: "50%",
        position: "fixed",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: ".1s",
        backfaceVisibility: "hidden"
    },
    cursorDot: {
        width: "8px",
        height: "8px",
        border: "1px solid",
        borderColor: theme.palette.primary.dark,
        borderRadius: "50%",
        position: "fixed",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: ".15s",
        backfaceVisibility: "hidden",
    },
    textAlignCenter: {
        textAlign: "center"
    },
    fullScreenWithFooterHeight: {
        minHeight: "calc(100vh - 112px)"
    },
    fullScreenWithHeaderHeight: {
        minHeight: "calc(100vh - 80px)"
    },
    backgroundColor: {
        backgroundColor: theme.palette.background.default
    },
    heroBackgroundImage: {
        backgroundImage: `url(${background})`,
        height: "100%",
        width: "auto",
        backgroundPosition: "center",
        backgroundSize: "cover",
        zIndex: "-99"
    },
    heroShapeImage: {
        backgroundImage: `url(${hero})`,
        height: "56%",
        opacity: "1",
        width: "auto",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        zIndex: "-1"
    },
    heroBannerHeight: {
        // minHeight: "50%"
    },
    asterik: {
        fontSize: theme.spacing(30),
        lineHeight: "100%"
    },
    mb2: {
        marginBottom: theme.spacing(2)
    },
    mb4: {
        marginBottom: theme.spacing(4)
    },
    mb10: {
        marginBottom: theme.spacing(10)
    }
}));

function Home() {
    const classes = useStyles();
    const history = useHistory();

    const theme = useTheme();
    const atLeastMediumScreen = useMediaQuery(theme.breakpoints.up('md'));

    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.clientX);
        setCursorY(e.clientY);
    });

    const goToContactMe = () => {
        history.push("/michelle/contact");
    }

    const getGreeting = () => {
        const today = new Date();
        const currentHour = today.getHours(); 
        if (currentHour < 5 || currentHour >= 20) {
            return 'Good Night';
        } else if (currentHour < 12) {
            return 'Good Morning';
        } else if (currentHour <= 17) {
            return 'Good Afternoon';
        } else {
            return 'Good Evening';
        }
    }

    const renderHeroBanner = () => {
        return (
            <Grid container className={`${classes.fullScreenWithHeaderHeight}`} id="homeHero">
                <Grid container item xs={12} justify="center" alignItems="center" className={`${classes.heroBackgroundImage}`}>
                    <Grid container item xs={12} justify="center" alignItems="center" className={`${classes.heroShapeImage}`}>
                        <Grid container item xs={10} justify="center">
                            <Grid xs={12} className={`${classes.textAlignCenter} ${classes.heroBannerHeight}`}>
                                <Typography variant="h1" className={classes.asterik}>*</Typography>
                                <Typography variant="h1" className={classes.mb10}>{getGreeting()}</Typography>
                            </Grid>
                            <Typography variant="subtitle1">Michelle UI/UX Product Development</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    };

    const renderIntro = () => {
        return (
            <Grid 
                container 
                justify="center" 
                alignItems="center" c
                className={`${classes.fullScreenWithFooterHeight} ${classes.backgroundColor}`} 
                id="homeIntro">
                <Grid container item xs={10} md={8} justify="center">
                    <Typography variant="h3" className={`${classes.textAlignCenter} ${classes.mb4} ${atLeastMediumScreen && classes.hoverCursor}`}>
                        {introduction}
                        {atLeastMediumScreen && (
                            <>
                                <div className={classes.cursor} style={{left: cursorX + 'px', top: cursorY + 'px'}} />
                                <div className={classes.cursorDot} style={{left: cursorX + 'px', top: cursorY + 'px'}} />
                            </>
                        )}
                    </Typography>
                    <MyButton content="Contact Me" onClick={goToContactMe} />
                </Grid>
            </Grid>
        );
    };

    return (
        <Grid container>
            {renderHeroBanner()}
            {renderIntro()}
            <ScrollToTop />
        </Grid>
    );
}

export default Home;