import React from 'react';
import NavigationBar from './NavigationBar';
import FileUploader from '../features/files/components/FileUploader';
import FilesViewer from '../features/files/components/FilesViewer';

const styles = {
    main: {
        width: '100%',
        padding: '88px 24px 0 24px'
    }
};

const Page = () =>
    <div>
        <NavigationBar title = 'Files app'/>
        <div style = { styles.main }>
            <FileUploader/>
            <FilesViewer/>
        </div>
    </div>;

export default Page;