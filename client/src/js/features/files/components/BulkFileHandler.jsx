import React from 'react';

const BulkFileHandler = ({ selection, bulkAction, bulkLabel, ...otherProps }) => {
    if (selection.length === 0) {
        return null;
    }
    return (
        <div>
            <span>Selected {selection.length} files</span>
            <button onClick={bulkAction}>{bulkLabel}</button>
        </div>
    );
};

export default BulkFileHandler;