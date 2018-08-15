import React from 'react';
import Radium from 'radium';
import muiThemeable from 'material-ui/styles/muiThemeable';
import NavigationBar from './NavigationBar';
import filesConnector from '../features/files/components/FilesConnector';
import FilesView from '../features/files/components/FilesView';

const styles = {
    main: {
        width: '100%',
        padding: '76px 24px 0 24px'
    }
};

const FilesViewer = filesConnector(FilesView);

class Page extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <div style={styles.main}>
                    { <FilesViewer/> }
                </div>
            </div>
        );
    }
};

export default Page;