import React from 'react';
import Button from '@material-ui/core/Button';

const styles = {
    button: {
        display: 'inline-block',
        marginLeft: '12px'
    }
};

const IconButton = ({ action, label, icon }) =>
    <div>
        <Button
            variant = 'contained'
            color = 'default'
            onClick = { action }
            className = 'action-button'
        >
            { label }
            <span style = { styles.button }>{ icon }</span>
        </Button>
    </div>;

export default IconButton;