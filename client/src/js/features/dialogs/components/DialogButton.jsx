import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showDialog } from '../duck';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

class DialogButton extends React.Component {
    launchDialog(e) {
        const { showDialog, name } = this.props;
        e.preventDefault();
        showDialog(name);
    }

    render() {
        const { name, label, classes } = this.props;
        return (
            <div>
            <Button variant="contained" color="default" onClick={(e) => this.launchDialog(e)}>
                { label }
                <CloudUploadIcon style={{ marginLeft: '12px' }} />
            </Button>
            </div>
        );
    }
}

export default connect(
    state => { return {} },
    dispatch => bindActionCreators({showDialog}, dispatch)
)(DialogButton);