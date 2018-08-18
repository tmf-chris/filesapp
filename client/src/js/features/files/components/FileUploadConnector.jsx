import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doUploadFile, clearUploadError } from '../duck';

const fileUploadConnector = WrappedComponent => {
    class FileUploadConnector extends React.Component {
        constructor() {
            super();
            this.state = {
                files: []
            };
        }

        onChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.setState({ files: files });
            this.props.clearUploadError();
        }

        fileUpload(e, files) {
            e.preventDefault();
            const file = files[0];
            const { doUploadFile } = this.props;
            doUploadFile({ file: file });
        }

        render() {
            const { uploadedFile, ...otherProps } = this.props;
            const { files } = this.state;
            return (
                <WrappedComponent
                    onFormSubmit = { (e) => this.fileUpload(e, files) }
                    onChange = { (e) => this.onChange(e) }
                    uploadedFile = { uploadedFile }
                    numFiles = { files.length }
                    { ...otherProps }
                />
            );
        }
    }

    return connect(
        state => { return { uploadedFile: state.uploaded_file } },
        dispatch => bindActionCreators({ doUploadFile, clearUploadError }, dispatch)
    )(FileUploadConnector);
}

export default fileUploadConnector;