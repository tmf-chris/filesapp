import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const styles = {
    text: {
        display: 'inline-block', marginRight: '12px', paddingTop: '8px'
    },
    icon: {
        marginLeft: '12px'
    }
}

const BulkFileHandler = ({ messageLabel, buttonAction, buttonLabel, disabled }) => {
    return (
        <div>
            <span style={styles.text}>{ messageLabel }</span>
            <Button
                id = 'bulk-delete-button'
                color = 'primary'
                onClick = { buttonAction }
                disabled = { disabled }
            >
                { buttonLabel }
                <DeleteForeverIcon style={styles.icon} />
            </Button>
        </div>
    );
};

export default BulkFileHandler;