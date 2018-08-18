import React from 'react';
import Button from '@material-ui/core/Button';

const ConfirmationView = ({ onClose, meta }) => {
    const okAction = (meta.hasOwnProperty('action')) ? meta.action : onClose;
    return (
        <div>
            <Button
                variant = 'contained'
                color = 'default'
                onClick = { okAction }
                id = 'confirm-ok-button'
            >
                OK
            </Button>
            <Button
                variant = 'contained'
                color = 'default'
                onClick = { onClose }
                id = 'confirm-cancel-button'
            >
                CANCEL
            </Button>
        </div>
    );
}

export default ConfirmationView;