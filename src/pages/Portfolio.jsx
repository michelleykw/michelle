import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import MyButton from '../components/MyButton';
import ScrollToTop from '../components/ScrollToTop';
import PortfolioItem from '../components/PortfolioItem';
import { portfolios } from '../resources/constants';

const useStyles = makeStyles(theme => ({
    mb2: {
        marginBottom: theme.spacing(2)
    },
    pt2: {
        paddingTop: theme.spacing(2)
    },
    borderStyle: {
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: theme.palette.text.primary
    },
    canvaDivStyle: {
        position: 'relative',
        width: '100%',
        height: 0,
        paddingTop: '56.2500%',
        paddingBottom: '48px',
        boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
        marginTop: '1.6em',
        marginBottom: '0.9em',
        overflow: 'hidden',
        borderRadius: '8px',
        willChange: 'transform',
    },
    canvaIFrameStyle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        border: 'none',
        padding: 0,
        margin: 0,
    },
}));

function Portfolio() {
    const classes = useStyles();
    const history = useHistory();

    const goToAbout = () => history.push('/michelle/about');

    const canva = () => {
        return (
            <Grid>
                <div className={classes.canvaDivStyle}>
                    <iframe loading="lazy" className={classes.canvaIFrameStyle} src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFCK_CGh50&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen" />
                </div>
                <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFCK_CGh50&#x2F;view?utm_content=DAFCK_CGh50&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Design by Michelle</a>
            </Grid>
        );
    };
        

    return (
        <Grid container>
            {/*canva()*/}
            {portfolios.map(item => <PortfolioItem item={item} isPortfolioPage={true}/>)}
            <Grid container justify="center" className={`${classes.pt2} ${classes.borderStyle}`}>
                <MyButton content="About Me" onClick={goToAbout} className={`${classes.mb2}`}/>
            </Grid>
            <ScrollToTop />
        </Grid>
    );
}

export default Portfolio;