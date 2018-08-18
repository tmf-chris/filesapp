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
            const { hideDialog, name } = this.props;
            hideDialog(name);
        }

        render() {
            const { dialogs, name, label, ...otherProps } = this.props;
            const open = ( dialogs.hasOwnProperty(name) && dialogs[name] !== false );
            const meta = open ? dialogs[name] : {};
            return (
                <Dialog
                    open={ open }
                    onClose={ () => this.onClose() }
                >
                    <DialogTitle>{ label }</DialogTitle>
                    <div style={ styles.wrapped }>
                        <WrappedComponent
                            onClose = { (e) => this.onClose(e) }
                            meta = { meta }
                            { ...otherProps }
                        />
                    </div>
                </Dialog>
            );
        }
    }

    return connect(
        state => { return { dialogs: state.dialogs } },
        dispatch => bindActionCreators({ hideDialog }, dispatch)
    )(MakeDialog);
}

export default makeDialog;