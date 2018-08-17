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

        bulkDelete(e) {
            e.preventDefault();
            const { doDeleteFiles, selection, clearSelection } = this.props;
            if (selection.length > 0) {
                doDeleteFiles(selection);
                clearSelection();
            }
        }

        render() {
            const { files, ...otherProps } = this.props;
            return (
                <WrappedComponent
                    files = { files }
                    bulkDelete = { (e) => this.bulkDelete(e) }
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