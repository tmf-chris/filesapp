import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const BulkFileHandler = ({ selection, bulkAction, bulkLabel, ...otherProps }) => {
    return (
        <div>
            <span style={{ display: 'inline-block', marginRight: '12px', paddingTop: '8px' }}>Selected {selection.length} files</span>
            <Button color="primary" onClick={bulkAction} disabled={selection.length === 0}>
                { bulkLabel }
                <DeleteForeverIcon style={{ marginLeft: '12px' }} />
            </Button>
        </div>
    );
};

export default BulkFileHandler;