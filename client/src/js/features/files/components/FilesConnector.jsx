import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Radium from 'radium';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { withStyles } from '@material-ui/core/styles';
import { getFiles } from '../duck';

const filesConnector = WrappedComponent => {
    class FilesConnector extends React.Component {
        componentWillMount() {
            const { getFiles } = this.props;
            getFiles();
        }

        render() {
            const { files, ...otherProps } = this.props;
            return (
                <WrappedComponent
                    files = { files }
                    { ...otherProps }
                />
            );
        }
    }

    FilesConnector = muiThemeable()(Radium(FilesConnector));
    return connect(
        state => { return { files: state.files } },
        dispatch => bindActionCreators({getFiles}, dispatch)
    )(FilesConnector);
}

export default filesConnector;