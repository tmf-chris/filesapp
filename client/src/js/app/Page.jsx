import React from 'react';
import NavigationBar from './NavigationBar';
import makeSelectable from '../features/files/components/MakeSelectable';
import filesConnector from '../features/files/components/FilesConnector';
import FilesView from '../features/files/components/FilesView';
import fileUploadConnector from '../features/files/components/FileUploadConnector';
import FileUploadForm from '../features/files/components/FileUploadForm';
import makeDialog from '../features/dialogs/components/MakeDialog';
import makeDialogButton from '../features/dialogs/components/DialogButton';
import ActionButton from '../features/dialogs/components/ActionButton';

const styles = {
    main: {
        width: '100%',
        padding: '88px 24px 0 24px'
    },
    inner: {
        marginBottom: '16px'
    }
};

const FilesViewer = filesConnector(makeSelectable(FilesView));
const FileUploadDialog = makeDialog(fileUploadConnector(FileUploadForm));
const FileUploadButton = makeDialogButton(ActionButton);

const Page = () =>
    <div>
        <NavigationBar title = 'Files app'/>
        <div style = { styles.main }>
            <div style= { styles.inner }>
                <FileUploadButton
                    name = 'upload'
                    label = 'Upload File'
                />
            </div>
            <FileUploadDialog
                name = 'upload'
                label = 'Choose file to upload'
            />
            <FilesViewer/>
        </div>
    </div>;

export default Page;