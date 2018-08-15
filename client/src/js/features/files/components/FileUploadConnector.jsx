import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doUploadFile } from '../duck';

const fileUploadConnector = WrappedComponent => {
    class FileUploadConnector extends React.Component {
        constructor() {
            super();
            this.state = {
                files: []
            };
        }

        onFormSubmit(e) {
            e.preventDefault();
            this.fileUpload(this.state.files);
        }

        onChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.setState({ files: files });
        }

        fileUpload(files) {
            const formData = { file: files[0] };
            const { doUploadFile, onClose } = this.props;
            this.props.doUploadFile(formData);
            if (onClose) {
                onClose();
            }
        }

        render() {
            const { ...otherProps } = this.props;
            return (
                <WrappedComponent
                    onFormSubmit = { (e) => this.onFormSubmit(e) }
                    onChange = { (e) => this.onChange(e) }
                    { ...otherProps }
                />
            );
        }
    }

    return connect(
        state => { return { uploaded_file: state.uploaded_file } },
        dispatch => bindActionCreators({doUploadFile}, dispatch)
    )(FileUploadConnector);
}

export default fileUploadConnector;