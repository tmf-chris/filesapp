import React from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const styles = {
    button: {
        marginLeft: '12px'
    }
};

const ActionButton = ({ action, label }) =>
    <div>
        <Button
            variant="contained"
            color="default"
            onClick={action}
        >
            { label }
            <CloudUploadIcon
                style={styles.button}
            />
        </Button>
    </div>;

export default ActionButton;