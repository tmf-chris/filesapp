import React from 'react';
import NavigationBar from './NavigationBar';
import filesConnector from '../features/files/components/FilesConnector';
import FilesView from '../features/files/components/FilesView';
import fileUploadConnector from '../features/files/components/FileUploadConnector';
import FileUploadView from '../features/files/components/FileUploadView';
import makeDialog from '../features/dialogs/components/MakeDialog';
import DialogButton from '../features/dialogs/components/DialogButton';

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

const Page = () =>
    <div>
        <NavigationBar/>
        <div style={styles.main}>
            <div style={styles.inner}>
                <DialogButton
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