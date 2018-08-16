import React from 'react';
import NavigationBar from './NavigationBar';
import filesConnector from '../features/files/components/FilesConnector';
import FilesView from '../features/files/components/FilesView';
import fileUploadConnector from '../features/files/components/FileUploadConnector';
import FileUploadView from '../features/files/components/FileUploadView';
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

const FilesViewer = filesConnector(FilesView);
const FileDialog = makeDialog(fileUploadConnector(FileUploadView));
const FileUploadButton = makeDialogButton(ActionButton);

const Page = () =>
    <div>
        <NavigationBar/>
        <div style={styles.main}>
            <div style={styles.inner}>
                <FileUploadButton
                    name='upload'
                    label='Upload File'
                />
            </div>
            <FileDialog
                name='upload'
            />
            <FilesViewer/>
        </div>
    </div>;

export default Page;