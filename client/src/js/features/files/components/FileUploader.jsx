import React from 'react';
import filesConnector from './FilesConnector';
import fileUploadConnector from './FileUploadConnector';
import FileUploadForm from './FileUploadForm';
import makeDialog from '../../dialogs/components/MakeDialog';
import makeDialogButton from '../../dialogs/components/DialogButton';
import IconButton from '../../dialogs/components/IconButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const FileUploadDialog = makeDialog(fileUploadConnector(FileUploadForm));
const FileUploadButton = makeDialogButton(IconButton);

const styles = {
    inner: {
        marginBottom: '16px'
    }
};

const FileUploader = () =>
    <div style= { styles.inner }>
        <FileUploadButton
            name = 'upload'
            label = 'Upload File'
            icon = {
                <CloudUploadIcon
                    style={styles.button}
                />
            }
        />
        <FileUploadDialog
            name = 'upload'
            label = 'Choose file to upload'
        />
    </div>;

export default FileUploader;