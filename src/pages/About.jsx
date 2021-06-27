import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { experiences, expertise, tools } from '../resources/constants'

const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(4)
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3)
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2)
        }
    },
    hoverCursor: {
        '&:hover': {
            color: theme.palette.primary.main,
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
    gradientText: {
        background: "-webkit-linear-gradient(#355C7D, #6C5B7B, #C67B90)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        paddingBottom: theme.spacing(1.5)
    },
    textAlignCenter: {
        textAlign: "center"
    },
    fullScreenHeight: {
        height: "96vh"
    },
    fullScreenWithHeaderHeight: {
        minHeight: "calc(100vh - 112px)"
    },
    introDesc: {
        backgroundColor: theme.palette.background.default,
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
        [theme.breakpoints.down('xs')]: {
            paddingBottom: theme.spacing(2)
        }
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
    mb5: {
        marginBottom: theme.spacing(5)
    },
    mb6: {
        marginBottom: theme.spacing(6)
    },
    mt5: {
        marginTop: theme.spacing(5)
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

    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.clientX);
        setCursorY(e.clientY);
    });

    const renderIntro = () => {
        return (
            <Grid container justify="center" alignItems="center" className={classes.fullScreenWithHeaderHeight} id="aboutIntro">
                <Grid xs={5} className={`${classes.introDesc} ${classes.hoverCursor}`}>
                    <Typography variant="h1" className={`${classes.gradientText} ${classes.isHoverCursor}`}>
                        Michelle Yong;
                    </Typography>
                    <Typography variant="h6" color="primary" className={`${classes.mb2} ${classes.mt5}`}>
                        THIS IS ME
                    </Typography>
                    <Typography variant="subtitle1">
                        Hello there, nice to meet you! This is Michelle, a Year 4 NUS undergraduate, pursuing a Bachelor of Computing in Computer Science and a minor in Management. I enjoy design, product and development ♡
                    </Typography>
                    <div className={classes.cursor} style={{left: cursorX + 'px', top: cursorY + 'px'}} />
                    <div className={classes.cursorDot} style={{left: cursorX + 'px', top: cursorY + 'px'}} />
                </Grid>
                <Grid container item xs={5} justify="flex-end">
                    <img
                        src="https://res.cloudinary.com/lovebonitointl/image/upload/q_auto,f_auto/v1624725942/profile.png"
                        alt="profile" 
                        className={classes.introProfile} />
                </Grid>
            </Grid>
        );
    };

    const renderExpertise = () => {
        return (
            <Grid container justify="center" alignItems="center" className={classes.fullScreenHeight} id="aboutExpertise">
                <Grid container item xs={8} justify="center">
                    <Typography variant="h2" className={`${classes.gradientText} ${classes.mb5}`}>Expertise</Typography>
                    <Typography variant="h3" className={classes.textAlignCenter}> 
                        {expertise}
                    </Typography>
                </Grid>
            </Grid>
        );
    };

    const renderExperienceItem = (name, duration, company, desc) => {
        return (
            <Grid item xs={6}>
                <Typography variant="h4" className={`${classes.textAlignCenter} ${classes.mb2}`}>
                    {name}
                </Typography>
                <Typography variant="subtitle1" className={`${classes.textAlignCenter} ${classes.mb5}`}>
                    {`${duration} @ ${company}`}
                </Typography>
                <ul className={classes.ul}>
                    {desc.map(item => <li className={classes.li}>{item}</li>)}
                </ul>
            </Grid>
        );
    };

    const renderExperience = () => {
        return (
            <Grid container justify="center" alignItems="center" className={classes.fullScreenHeight} id="aboutExperience">
                <Grid container item xs={10} justify="center">
                    <Grid xs={12} className={classes.textAlignCenter}>
                        <Typography variant="h2" className={`${classes.gradientText} ${classes.mb5}`}>Experience</Typography>
                    </Grid>
                    {experiences.map(({name, duration, company, desc}) => renderExperienceItem(name, duration, company, desc))}
                </Grid>
            </Grid>
        );
    };

    const renderToolItem = (name, toolList) => {
        return (
            <Grid item xs={4} className={classes.px4}>
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
                <Grid container item xs={10} justify="center">
                    <Grid xs={12} className={classes.textAlignCenter}>
                        <Typography variant="h2" className={`${classes.gradientText} ${classes.mb5}`}>Tools</Typography>
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
        </Grid>
    );
}

export default About;