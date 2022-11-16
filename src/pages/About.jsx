import React, { useRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid, Typography } from '@material-ui/core';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ColoredHeader from '../components/ColoredHeader';
import MyButton from '../components/MyButton';
import ScrollToTop from '../components/ScrollToTop';
import profile from '../resources/profile.jpg';
import { cca, education, experiences, expertise, tools, aboutIntroduction, aboutIntroduction2 } from '../resources/constants';

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
        padding: theme.spacing(1),
        fontSize: theme.spacing(6),
        border: "1px solid",
        borderRadius: theme.spacing(10)
    },
    ul: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        paddingLeft: theme.spacing(1),
        lineHeight: "1.5rem"
    },
    li: {
        fontSize: "1.125rem",
        color: theme.palette.text.secondary,
        paddingBottom: theme.spacing(2)
    },
    mb1: {
        marginBottom: theme.spacing(1)
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
    mt2: {
        marginTop: theme.spacing(2)
    },
    mt5: {
        marginTop: theme.spacing(5)
    },
    mt6: {
        marginTop: theme.spacing(6)
    },
    mx1: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    mx12: {
        marginLeft: theme.spacing(12),
        marginRight: theme.spacing(12)
    },
    pt2: {
        paddingTop: theme.spacing(2)
    },
    px2: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    px4: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
    }
}));

function About() {
    const classes = useStyles();
    const history = useHistory();
    const theme = useTheme();
    const atLeastMediumScreen = useMediaQuery(theme.breakpoints.up('md'));

    const experienceRef = useRef(null);

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
            <Grid container justify="space-evenly" alignItems="center" className={`${classes.fullScreenWithHeaderHeight}`} id="aboutIntro">
                {!atLeastMediumScreen && (
                    <img
                        src={profile}
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
                    <Grid>
                        <Typography variant="subtitle1">{aboutIntroduction}</Typography>
                        <Typography variant="subtitle1" className={classes.mt2}>{aboutIntroduction2}</Typography>
                    </Grid>
                    <ArrowDownwardRoundedIcon
                        color="primary" 
                        className={`${classes.outlineRounded} ${classes.mt6}`} 
                        onClick={() => scrollTo(experienceRef)}
                    />
                </Grid>
                {atLeastMediumScreen && (
                    <Grid container item sm={5} justify="flex-end">
                        <img
                            src={profile}
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
                    <ColoredHeader variant="h2" copy="Expertise" className={atLeastMediumScreen ? classes.mb5 : classes.mb3} />
                    <Typography variant="h3" className={`${classes.textAlignCenter}`}>{expertise}</Typography>
                    {atLeastMediumScreen && (
                        <Grid>
                            <div className={classes.cursor} style={{left: cursorX + 'px', top: cursorY + 'px'}} />
                            <div className={classes.cursorDot} style={{left: cursorX + 'px', top: cursorY + 'px'}} />
                        </Grid>
                    )}
                </Grid>
            </Grid>
        );
    };

    const renderExperienceItem = (name, duration, company, desc) => {
        return (
            <Grid item xs={12}>
                <Typography variant="h4" className={`${classes.textAlignCenter} ${classes.mb2}`}>
                    {name}
                </Typography>
                <Typography variant="subtitle1" className={`${classes.textAlignCenter} ${atLeastMediumScreen ? classes.mb3 : classes.mb2}`}>
                    {`${duration} @ ${company}`}
                </Typography>
                <ul className={`${classes.ul} ${atLeastMediumScreen ? classes.mb5 : classes.mb3}`}>
                    {desc.map(item => <li className={classes.li}>{item}</li>)}
                </ul>
            </Grid>
        );
    };

    const renderExperience = () => {
        return (
            <Grid container justify="center" alignItems="center" className={classes.fullScreenHeight} id="aboutExperience">
                <Grid container item xs={11} sm={10} md={8} lg={6} justify="center">
                    <Grid xs={12} className={`${classes.textAlignCenter}`}>
                        <ColoredHeader variant="h2" copy="Experience" className={`${atLeastMediumScreen ? classes.mb5 : classes.mb3}`} />
                    </Grid>
                    {experiences.map(({name, duration, company, desc}) => renderExperienceItem(name, duration, company, desc))}
                </Grid>
            </Grid>
        );
    };

    const renderToolItem = (name, toolList) => {
        return (
            <Grid item xs={12} sm={6} md={4} className={atLeastMediumScreen ? classes.px4 : classes.px2}>
                <Typography variant="h5" color="textSecondary" className={`${classes.textAlignCenter} ${atLeastMediumScreen ? classes.mb2 : classes.mb1}`}>
                    {name}
                </Typography>
                <Typography variant="subtitle1" className={`${classes.textAlignCenter} ${atLeastMediumScreen ? classes.mb6 : classes.mb3 }`}>
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
                        <ColoredHeader variant="h2" copy="Tools" className={atLeastMediumScreen ? classes.mb5 : classes.mb3} />
                    </Grid>
                    {tools.map(({name, toolList}) => renderToolItem(name, toolList))}
                </Grid>
            </Grid>
        );
    };

    const renderEducationItem = (school, degree, duration, desc) => {
        return (
            <Grid item xs={12}>
                <Typography variant="h4" className={`${classes.textAlignCenter} ${classes.mb2}`}>
                    {school}
                </Typography>
                <Typography variant="subtitle1" className={`${classes.textAlignCenter} ${classes.mb1}`}>
                    {`${degree}`}
                </Typography>
                <Typography variant="subtitle2" className={`${classes.textAlignCenter} ${atLeastMediumScreen ? classes.mb3 : classes.mb2}`}>
                    {`${duration}`}
                </Typography>
                <ul className={`${classes.ul} ${classes.mb3}`}>
                    {desc.map(item => <li className={classes.li}>{item}</li>)}
                </ul>
            </Grid>
        );
    };

    const renderEducation = () => {
        return (
            <Grid container justify="center" alignItems="center" className={classes.fullScreenHeight} id="aboutEducation">
                <Grid container item xs={11} sm={10} md={8} lg={6} justify="center">
                    <Grid xs={12} className={classes.textAlignCenter}>
                        <ColoredHeader variant="h2" copy="Education" className={atLeastMediumScreen ? classes.mb5 : classes.mb3} />
                    </Grid>
                    {education.map(({school, degree, duration, desc}) => renderEducationItem(school, degree, duration, desc))}
                </Grid>
            </Grid>
        );
    };

    const renderCcaItem = (cca, name, duration, desc) => {
        return (
            <Grid item xs={12}>
                <Typography variant="h4" className={`${classes.textAlignCenter} ${classes.mb2}`}>
                    {cca}
                </Typography>
                <Typography variant="subtitle1" className={`${classes.textAlignCenter} ${classes.mb1}`}>
                    {name}
                </Typography>
                <Typography variant="subtitle2" className={`${classes.textAlignCenter} ${atLeastMediumScreen ? classes.mb3 : classes.mb2}`}>
                    {`${duration}`}
                </Typography>
                <ul className={`${classes.ul} ${classes.mb3}`}>
                    {desc.map(item => <li className={classes.li}>{item}</li>)}
                </ul>
            </Grid>
        );
    };

    const renderCca = () => {
        return (
            <Grid container justify="center" alignItems="center" className={classes.fullScreenHeight} id="aboutCca">
                <Grid container item xs={11} sm={10} md={8} lg={6} justify="center">
                    <Grid xs={12} className={classes.textAlignCenter}>
                        <ColoredHeader variant="h2" copy="Co-Curricular Activities" className={atLeastMediumScreen ? classes.mb5 : classes.mb3} />
                    </Grid>
                    {cca.map(({cca, name, duration, desc}) => renderCcaItem(cca, name, duration, desc))}
                </Grid>
            </Grid>
        );
    };

    const goToPortfolio = () => history.push('/michelle/portfolio');

    const goToContact = () => history.push('/michelle/contact');

    return (
        <Grid container className={classes.container}>
            {renderIntro()}
            {renderExperience()}
            {renderEducation()}
            {renderExpertise()}
            {renderTools()}
            {renderCca()}
            <Grid container justify="center" className={`${classes.pt2}`}>
                <MyButton content="View Portfolio" onClick={goToPortfolio} className={`${classes.mb2} ${classes.mx1}`}/>
                <MyButton content="Contact Me" onClick={goToContact} className={`${classes.mb2} ${classes.mx1}`}/>
            </Grid>
            <ScrollToTop />
        </Grid>
    );
}

export default About;