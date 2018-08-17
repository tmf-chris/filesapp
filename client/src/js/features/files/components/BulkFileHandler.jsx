import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const styles = {
    text: {
        display: 'inline-block', marginRight: '12px', paddingTop: '8px'
    },
    textDisabled: {
        display: 'inline-block', marginRight: '12px', paddingTop: '8px', color: 'rgba(0, 0, 0, 0.26)'
    },
    icon: {
        marginLeft: '12px'
    }
}

const BulkFileHandler = ({ messageLabel, buttonAction, buttonLabel, disabled }) => {
    const textStyle = disabled ? styles.textDisabled : styles.text;
    return (
        <div>
            <span style={textStyle}>{ messageLabel }</span>
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