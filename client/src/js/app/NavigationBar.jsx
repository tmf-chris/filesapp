import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavigationBar = ({ title }) =>
    <AppBar color="primary">
        <Toolbar>
            <Typography
                variant="title"
                color="inherit"
            >
                { title }
            </Typography>
        </Toolbar>
    </AppBar>;

export default NavigationBar;