import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showDialog } from '../duck';

const makeDialogButton = (WrappedComponent) => {
    class MakeDialogButton extends React.Component {
        action(e) {
            e.preventDefault();
            const { name, showDialog, meta = {} } = this.props;
            showDialog(name, meta);
        }

        render() {
            const { name, label, ...otherProps } = this.props;
            return (
                <WrappedComponent
                    action = { (e) => this.action(e) }
                    label = { label }
                    { ...otherProps }
                />
            );
        }
    }

    return connect(
        state => { return {} },
        dispatch => bindActionCreators({showDialog}, dispatch)
    )(MakeDialogButton);
};

export default makeDialogButton;