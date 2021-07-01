import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import SideBar from '../components/SideBar';
import MyButton from '../components/MyButton';

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

function Portfolio() {
    const classes = useStyles();
    const history = useHistory();

    const renderClock = () => {
        return (
            <Grid item xs={12}>
                Portfolio
            </Grid>
        );
    };

    const portfolios = [
        {
            category: 'UI/UX Design',
            name: 'Roomi',
            desc: 'Designed a mobile application for the purpose of finding an ideal house mate from the perspective of a person who has a space to live, as well as that looking for a place to live.',
            portfolioHref: '', 
            imageHref: 'https://mb.com.ph/wp-content/uploads/2021/02/youth2-1.jpg'
        },
        {
            category: 'UI/UX to Development',
            name: 'Clock, Stopwatch & Timer',
            desc: 'Design and implementation of a clock, stopwatch and timer based on needs',
            portfolioHref: '', 
            imageHref: ''
        },
        {
            category: 'UI/UX Design',
            name: 'NUSReg',
            desc: 'Redesign of the NUS EduReg, a module registration platform used by students in NUS, through a series of user study.',
            portfolioHref: '', 
            imageHref: ''
        },
        {
            category: 'Social Media Collaterals',
            name: 'NUSSU Open Day 2020',
            desc: 'Collaterals used on the NUSSU social media accounts for the publicity leading up to the NUS e-Open House & Student Life talks 2020.',
            portfolioHref: '', 
            imageHref: ''
        },
        {
            category: 'UI/UX to Development',
            name: 'Portfolio Website Design',
            desc: 'The initial design of this website, used for the development, as what you are seeing now :)',
            portfolioHref: '', 
            imageHref: '',
            iframe: <iframe width="1000" height="565" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfsyB6qvzMYtqn7OhHy6XsA%2FWebsite-Portfolio-UI-UX%3Fnode-id%3D10%253A173%26scaling%3Dscale-down%26page-id%3D8%253A7" allowfullscreen></iframe>
        }
    ];

    const goToPage = href => {
        console.log('goToPage', href);
        // history.push(href);
    };

    const renderPortfolio = item => {
        const { category, name, desc, portfolioHref, imageHref, iframe } = item;
        return (
            <Grid container className={classes.fullScreenHeight} >
                <SideBar copy={category} />
                <Grid container xs={11} justify="center" className={`${classes.content} ${classes.mt5}`}>
                    <Grid item xs={11}>
                        <Grid container item xs={12} justify="space-between" className={classes.mb1}>
                            <Typography variant="h3">{name}</Typography>
                            {portfolioHref && <MyButton content="See More" onClick={() => goToPage(portfolioHref)} />}
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
    };

    return (
        <Grid container>
            {portfolios.map(renderPortfolio)}
        </Grid>
    );
}

export default Portfolio;