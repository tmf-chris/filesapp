import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Radium from 'radium';
import muiThemeable from 'material-ui/styles/muiThemeable';
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
            const url = 'http://localhost:5001/api/fileupload';
            const formData = { file: files[0] };
            this.props.doUploadFile(formData);
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

    FileUploadConnector = muiThemeable()(Radium(FileUploadConnector));
    return connect(
        state => { return { uploaded_file: state.uploaded_file } },
        dispatch => bindActionCreators({doUploadFile}, dispatch)
    )(FileUploadConnector);
}

export default fileUploadConnector;