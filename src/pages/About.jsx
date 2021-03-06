import React, { useRef, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid, Typography } from '@material-ui/core';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ColoredHeader from '../components/ColoredHeader';
import ScrollToTop from '../components/ScrollToTop';
import { experiences, expertise, tools } from '../resources/constants'

const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(4)
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2)
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2)
        }
    },
    hoverCursor: {
        '&:hover': {
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
    fullScreenHeight: {
        minHeight: "96vh"
    },
    fullScreenWithHeaderHeight: {
        minHeight: "calc(100vh - 112px)"
    },
    introDesc: {
        [theme.breakpoints.up('md')]: {
            paddingBottom: theme.spacing(10)
        },
        [theme.breakpoints.down('sm')]: {
            paddingBottom: theme.spacing(9)
        },
        [theme.breakpoints.down('xs')]: {
            paddingBottom: theme.spacing(8)
        }
    },
    introProfile: {
        height: "calc(100vh - 112px)",
        width: "auto",
        [theme.breakpoints.up('sm')]: {
            paddingBottom: theme.spacing(4)
        },
        [theme.breakpoints.down('md')]: {
            width: "100%",
            height: "auto"
        }
    },
    introProfileMobile: {
        height: theme.spacing(40),
        width: theme.spacing(40),
        objectFit: "cover",
        borderRadius: theme.spacing(50),
        margin: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            height: theme.spacing(25),
            width: theme.spacing(25),
        }
    },
    background: {
        backgroundColor: theme.palette.background.default
    },
    outlineRounded: {
        padding: theme.spacing(0.5),
        fontSize: theme.spacing(5),
        border: "1px solid",
        borderRadius: theme.spacing(10)
    },
    ul: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        paddingLeft: theme.spacing(1)
    },
    li: {
        fontSize: "1.125rem",
        color: theme.palette.text.secondary,
        paddingBottom: theme.spacing(2)
    },
    mb2: {
        marginBottom: theme.spacing(2)
    },
    mb3: {
        marginBottom: theme.spacing(3)
    },
    mb5: {
        marginBottom: theme.spacing(5)
    },
    mb6: {
        marginBottom: theme.spacing(6)
    },
    mt5: {
        marginTop: theme.spacing(5)
    },
    mt10: {
        marginTop: theme.spacing(10)
    },
    mx12: {
        marginLeft: theme.spacing(12),
        marginRight: theme.spacing(12)
    },
    px4: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
    }
}));

function About() {
    const classes = useStyles();

    const theme = useTheme();
    const atLeastMediumScreen = useMediaQuery(theme.breakpoints.up('md'));

    const experienceRef = useRef(null)

    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.clientX);
        setCursorY(e.clientY);
    });

    const scrollTo = (ref) => {
        window.scroll({
            top: ref.current.offsetTop,
            behavior: "smooth",
        });
    }

    const renderIntro = () => {
        return (
            <Grid container justify="center" alignItems="center" className={`${classes.fullScreenWithHeaderHeight}`} id="aboutIntro">
                {!atLeastMediumScreen && (
                    <img
                        src="https://res.cloudinary.com/lovebonitointl/image/upload/q_auto,f_auto/v1624725942/profile.png"
                        alt="profile" 
                        className={classes.introProfileMobile} />
                )}
                <Grid item container justify={!atLeastMediumScreen && "center"} xs={11} sm={10} md={6} lg={5} className={`${classes.introDesc} ${!atLeastMediumScreen && classes.textAlignCenter}`}>
                    <ColoredHeader copy="Michelle Yong;" className={classes.mb5} />
                    {atLeastMediumScreen && (
                        <Typography variant="h6" color="primary" className={`${classes.mb2}`}>
                            THIS IS ME
                        </Typography>
                    )}
                    <Typography variant="subtitle1">
                        Hello there, nice to meet you! This is Michelle, a Year 4 NUS undergraduate, pursuing a Bachelor of Computing in Computer Science and a minor in Management. I enjoy design, product and development ♡
                    </Typography>
                    <ArrowDownwardRoundedIcon
                        color="primary" 
                        className={`${classes.outlineRounded} ${classes.mt10}`} 
                        onClick={() => scrollTo(experienceRef)}
                    />
                </Grid>
                {atLeastMediumScreen && (
                    <Grid container item sm={5} justify="flex-end">
                        <img
                            src="https://res.cloudinary.com/lovebonitointl/image/upload/q_auto,f_auto/v1624725942/profile.png"
                            alt="profile" 
                            className={classes.introProfile} />
                    </Grid>
                )}
            </Grid>
        );
    };

    const renderExpertise = () => {
        return (
            <Grid container justify="center" alignItems="center" className={`${classes.background} ${classes.fullScreenHeight}`} id="aboutExpertise" ref={experienceRef}>
                <Grid container item xs={8} justify="center" className={atLeastMediumScreen && classes.hoverCursor}>
                    <ColoredHeader variant="h2" copy="Expertise" className={classes.mb5} />
                    <Typography variant="h3" className={`${classes.textAlignCenter}`}>{expertise}</Typography>
                    {atLeastMediumScreen && (
                        <>
                            <div className={classes.cursor} style={{left: cursorX + 'px', top: cursorY + 'px'}} />
                            <div className={classes.cursorDot} style={{left: cursorX + 'px', top: cursorY + 'px'}} />
                        </>
                    )}
                </Grid>
            </Grid>
        );
    };

    const renderExperienceItem = (name, duration, company, desc) => {
        return (
            <Grid item xs={12} md={6}>
                <Typography variant="h4" className={`${classes.textAlignCenter} ${classes.mb2}`}>
                    {name}
                </Typography>
                <Typography variant="subtitle1" className={`${classes.textAlignCenter} ${atLeastMediumScreen ? classes.mb5 : classes.mb2}`}>
                    {`${duration} @ ${company}`}
                </Typography>
                <ul className={`${classes.ul} ${classes.mb3}`}>
                    {desc.map(item => <li className={classes.li}>{item}</li>)}
                </ul>
            </Grid>
        );
    };

    const renderExperience = () => {
        return (
            <Grid container justify="center" alignItems="center" className={classes.fullScreenHeight} id="aboutExperience">
                <Grid container item xs={11} sm={10} justify="center">
                    <Grid xs={12} className={classes.textAlignCenter}>
                        <ColoredHeader variant="h2" copy="Experience" className={atLeastMediumScreen ? classes.mb5 : classes.mb3} />
                    </Grid>
                    {experiences.map(({name, duration, company, desc}) => renderExperienceItem(name, duration, company, desc))}
                </Grid>
            </Grid>
        );
    };

    const renderToolItem = (name, toolList) => {
        return (
            <Grid item xs={12} sm={6} md={4} className={atLeastMediumScreen && classes.px4}>
                <Typography variant="h5" color="textSecondary" className={`${classes.textAlignCenter} ${classes.mb2}`}>
                    {name}
                </Typography>
                <Typography variant="subtitle1" className={`${classes.textAlignCenter} ${classes.mb6}`}>
                    {toolList.join(', ')}
                </Typography>
            </Grid>
        );
    };

    const renderTools = () => {
        return (
            <Grid container justify="center" alignItems="center" className={classes.fullScreenHeight} id="aboutTools">
                <Grid container item xs={11} sm={10} justify="center">
                    <Grid xs={12} className={classes.textAlignCenter}>
                        <ColoredHeader variant="h2" copy="Tools" className={classes.mb5} />
                    </Grid>
                    {tools.map(({name, toolList}) => renderToolItem(name, toolList))}
                </Grid>
            </Grid>
        );
    };

    return (
        <Grid container className={classes.container}>
            {renderIntro()}
            {renderExpertise()}
            {renderExperience()}
            {renderTools()}
            <ScrollToTop />
        </Grid>
    );
}

export default About;