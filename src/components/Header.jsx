import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Box,
    Button,
    Grid,
    IconButton,
    SwipeableDrawer,
    Toolbar,
    Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { pages } from '../resources/constants';

const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: theme.palette.background.default,
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: theme.palette.text.primary,
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(2),
            height: theme.spacing(10)
        }
    },
    navButton: {
        fontSize: '1.125rem',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2)
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2)
        }
    },
    drawer: {
        padding: theme.spacing(9)
    },
    michelle: {
        fontSize: "3rem",
        cursor: "pointer"
    }
}));

function Header() {
    const classes = useStyles();
    const location = useLocation();
    let history = useHistory();
    const [isMobileView, setIsMobileView] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        const setResponsiveness = () => {
            if (window.innerWidth < 480) {
                setIsMobileView(true);
            } else {
                setIsMobileView(false);
            }
        }
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    const goToHomePage = () => {
        history.push("/michelle");
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    };

    const renderLinks = (isMobile = false) => {
        return pages.map(({ href, label }) => (
            <Button
                component={Link}
                to={href}
                color={location.pathname === href ? "primary" : "textPrimary"}
                onClick={isMobile && handleCloseDrawer}
                className={classes.navButton}
            >
                {label}
            </Button>
        ));
    }

    const renderDrawerOptions = () => {
        return (
            <Grid container direction="column" alignItems="center" ustify="center" className={classes.drawer}>
                {renderLinks(true)}
            </Grid>
        );
    };

    const renderMobileDisplay = () => {
        return (
            <>
                <IconButton onClick={() => setIsDrawerOpen(true)}>
                    <MenuIcon fontSize="large" color="primary" />
                </IconButton>
                <SwipeableDrawer anchor="right" open={isDrawerOpen} onClose={handleCloseDrawer}>
                    {renderDrawerOptions()}
                </SwipeableDrawer>
            </>
        );
    };

    const renderDesktopDisplay = () => {
        return (
            <Box display="flex" justifyContent="center">
                {renderLinks()}
            </Box>
        );
    };

    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <Grid container justify="space-between" justifyContent="center">
                    <Typography variant="h3" color="textPrimary" onClick={goToHomePage} className={classes.michelle}>
                        *M
                    </Typography>
                    {isMobileView ? renderMobileDisplay() : renderDesktopDisplay()}
                </Grid>
            </Toolbar>
        </AppBar >
    );
}

export default Header;