import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    navigation: {
        backgroundColor: '#333 !important',
        color: '#fff'
    }
};

class NavigationBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <AppBar className={classes.navigation}>
                <Toolbar>
                    <Typography
                        variant="title"
                        className={classes.navigation}
                    >
                        Files app
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(NavigationBar);