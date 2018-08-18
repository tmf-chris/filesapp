import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { getFiles, doDeleteFiles } from '../duck';

const filesConnector = WrappedComponent => {
    class FilesConnector extends React.Component {

        componentWillMount() {
            const { getFiles } = this.props;
            getFiles();
        }

        render() {
            const { files, doDeleteFiles, ...otherProps } = this.props;
            return (
                <WrappedComponent
                    files = { files }
                    deleteAction = { doDeleteFiles }
                    { ...otherProps }
                />
            );
        }
    }

    return connect(
        state => { return { files: state.files } },
        dispatch => bindActionCreators({ getFiles, doDeleteFiles }, dispatch)
    )(FilesConnector);
}

export default filesConnector;