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

const BulkFileHandler = ({ selection, bulkAction, bulkLabel, ...otherProps }) => {
    return (
        <div>
            <span style={styles.text}>Selected {selection.length} files</span>
            <Button
                color="primary"
                onClick={bulkAction}
                disabled={selection.length === 0}
            >
                { bulkLabel }
                <DeleteForeverIcon style={styles.icon} />
            </Button>
        </div>
    );
};

export default BulkFileHandler;