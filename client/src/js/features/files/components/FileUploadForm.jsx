import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import ErrorIcon from '@material-ui/icons/Error';
import * as Constants from '../../../constants';

const styles = {
    error: {
        marginBottom: '12px'
    },
    notes: {
        marginTop: '48px', fontSize: '11px', fontStyle: 'italic'
    }
}

const FileUploadForm = ({ onFormSubmit, onChange, uploadedFile, numFiles, ...otherProps }) => {
    const errors = {
        [Constants.FILE_TYPE_NOT_ALLOWED]: 'File type not allowed',
        [Constants.FILE_SIZE_EXCEEDED]: 'File exceeds allowed size',
        [Constants.FILE_SIZE_REJECTED] : 'File exceeds allowed size',
        [Constants.FILE_SIZE_EXCEEDED_STR] : 'File exceeds allowed size'
    }
    const hasError =
        typeof uploadedFile !== 'undefined' &&
        uploadedFile.hasOwnProperty('error') &&
        uploadedFile.error.hasOwnProperty('data');
    const errorMessage = hasError ? errors[uploadedFile.error.data.status.file[0]] : '';
    return (
        <div>
            { hasError && numFiles > 0 &&
                <div style={ styles.error }>
                    <Chip
                        id = 'error-chip'
                        avatar={
                            <Avatar>
                                <ErrorIcon />
                            </Avatar>
                        }
                        label = { errorMessage }
                        color = 'secondary'
                    />
                </div>
            }
            <form onSubmit={(e) => onFormSubmit(e)}>
                <Input
                    type='file'
                    onChange={(e) => onChange(e)}
                />
                <Button
                    id = 'submit-button'
                    type = 'submit'
                    disabled = { numFiles === 0 }
                >
                    Upload
                </Button>
            </form>
            <div style={styles.notes}>
                Maximum file size: { Constants.MAX_FILE_SIZE_STR },
                <a href={Constants.SERVER_URL + 'allowed'} target="_blank">Allowed file types</a>
            </div>
        </div>
    );
};

export default FileUploadForm;