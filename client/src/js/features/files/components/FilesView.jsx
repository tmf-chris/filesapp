import React from 'react';

const FilesView = ({ files, ...otherProps }) => {
    console.log(files);
    return (
        <div>
            { files.map(el => {
                return (
                    <div>{el.name}</div>
                );
            })}
        </div>
    );
};

export default FilesView;