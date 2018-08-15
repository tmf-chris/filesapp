import React from 'react';
import Radium from 'radium';
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
    }
};

const FilesViewer = filesConnector(FilesView);
const FileUploadViewer = fileUploadConnector(FileUploadView);
const FileDialog = makeDialog(fileUploadConnector(FileUploadView));

class Page extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <div style={styles.main}>
                    <div style={{ marginBottom: '16px' }}>
                        <DialogButton name='upload' label='Upload File'/>
                    </div>
                    <FileDialog name='upload'/>
                    <FilesViewer/>
                </div>
            </div>
        );
    }
};

export default Page;