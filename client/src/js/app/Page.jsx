import React from 'react';
import Radium from 'radium';
import muiThemeable from 'material-ui/styles/muiThemeable';
import NavigationBar from './NavigationBar';
import filesConnector from '../features/files/components/FilesConnector';
import FilesView from '../features/files/components/FilesView';
import fileUploadConnector from '../features/files/components/FileUploadConnector';
import FileUploadView from '../features/files/components/FileUploadView';

const styles = {
    main: {
        width: '100%',
        padding: '88px 24px 0 24px'
    }
};

const FilesViewer = filesConnector(FilesView);
const FileUploadViewer = fileUploadConnector(FileUploadView);

class Page extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <div style={styles.main}>
                    <FileUploadViewer/>
                    <FilesViewer/>
                </div>
            </div>
        );
    }
};

export default Page;