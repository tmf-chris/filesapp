import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { hideDialog } from '../duck';

const makeDialog = WrappedComponent => {
    class MakeDialog extends React.Component {
        onClose() {
            this.props.hideDialog(this.props.name);
        }

        render() {
            const { dialogs, name, ...otherProps } = this.props;
            const open = ( this.props.dialogs.hasOwnProperty(name) && this.props.dialogs[name] !== false );
            return (
                <Dialog
                    open={ open }
                    onClose={ () => this.onClose() }
                >
                    <DialogTitle>Choose file to upload</DialogTitle>
                    <div style={{ padding: '16px' }}>
                        <WrappedComponent
                            onClose = { (e) => this.onClose(e) }
                            { ...otherProps }
                        />
                    </div>
                </Dialog>
            );
        }
    }

    return connect(
        state => { return { dialogs: state.dialogs } },
        dispatch => bindActionCreators({hideDialog}, dispatch)
    )(MakeDialog);
}

export default makeDialog;