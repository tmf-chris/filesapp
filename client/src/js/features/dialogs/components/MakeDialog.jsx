import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { hideDialog } from '../duck';

const makeDialog = WrappedComponent => {

    const styles = {
        wrapped: {
            padding: '0 16px 16px 16px'
        }
    };

    class MakeDialog extends React.Component {
        onClose() {
            this.props.hideDialog(this.props.name);
        }

        render() {
            const { dialogs, name, ...otherProps } = this.props;
            const open = ( dialogs.hasOwnProperty(name) && dialogs[name] !== false );
            return (
                <Dialog
                    open={ open }
                    onClose={ () => this.onClose() }
                >
                    <DialogTitle>Choose file to upload</DialogTitle>
                    <div style={ styles.wrapped }>
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