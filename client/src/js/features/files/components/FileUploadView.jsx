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

const FileUploadView = ({ onFormSubmit, onChange, uploadedFile, files, ...otherProps }) => {
    const errors = {
        [Constants.FILE_TYPE_NOT_ALLOWED]: 'File type not allowed',
        [Constants.FILE_SIZE_EXCEEDED]: 'File exceeds allowed size',
        [Constants.FILE_SIZE_REJECTED] : 'File exceeds allowed size'
    }
    const hasError = uploadedFile.hasOwnProperty('error') && uploadedFile.error.hasOwnProperty('data');
    return (
        <div>
            { hasError &&
                <div style={ styles.error }>
                    <Chip
                        avatar={
                            <Avatar>
                                <ErrorIcon />
                            </Avatar>
                        }
                        label={ errors[uploadedFile.error.data.status.file[0]] }
                        color="secondary"
                    />
                </div>
            }
            <form onSubmit={(e) => onFormSubmit(e)}>
                <Input
                    type='file'
                    onChange={(e) => onChange(e)}
                />
                <Button
                    type='submit'
                    disabled={ files.length === 0 }
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

export default FileUploadView;