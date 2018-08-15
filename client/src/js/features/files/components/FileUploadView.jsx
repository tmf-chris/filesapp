import React from 'react';

const FileUploadView = ({ onFormSubmit, onChange, ...otherProps }) => {
    return (
        <form onSubmit={(e) => onFormSubmit(e)}>
            <input type="file" onChange={(e) => onChange(e)} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default FileUploadView;