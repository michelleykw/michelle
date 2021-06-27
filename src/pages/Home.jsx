import React from 'react';
import { useHistory } from "react-router-dom";
import { Box, Typography } from '@material-ui/core';
import MyButton from '../components/MyButton';

function Home() {
    // const classes = useStyles();
    let history = useHistory();

    const goToContactMe = () => {
        history.push("/contact");
    }

    return (
        <Box>
            <Typography variant="h4">Home</Typography>
            <MyButton content="Contact Me" onClick={goToContactMe} />
        </Box>
    );
}

export default Home;