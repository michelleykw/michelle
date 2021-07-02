import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';

const useStyles = makeStyles(theme => ({
    scrollButton: {
        padding: theme.spacing(0.5),
        fontSize: theme.spacing(5),
        border: "1px solid",
        borderColor: theme.palette.primary.light,
        borderRadius: theme.spacing(10),
        position: "fixed",
        bottom: theme.spacing(4),
        right: theme.spacing(4),
        height: theme.spacing(8),
        zIndex: 1000,
        cursor: "pointer",
        animation: "fadeIn 0.3s",
        transition: "opacity 0.4s",
        backgroundColor: theme.palette.background.default,
        '&:hover': {
            borderColor: theme.palette.primary[800],
            color: theme.palette.primary[800]
        }
    }
}));

function ScrollToTop() {
    const classes = useStyles();
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop);

    return (
        <ArrowUpwardRoundedIcon 
            color="primary"
            className={classes.scrollButton} 
            onClick={scrollToTop} 
            style={{ display: showScroll ? 'flex' : 'none' }}
        />
    );
}

export default ScrollToTop;