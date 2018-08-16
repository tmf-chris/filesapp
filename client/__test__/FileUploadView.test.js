import React from 'react';
import { shallow } from 'enzyme';
import FileUploadView from '../src/js/features/files/components/FileUploadView';
import * as Constants from '../src/js/constants';

test('File upload view shows no error chip for correct file (size/type)', () => {
    const uploadedFile = {};
    const wrapper = shallow(
        <FileUploadView
            uploadedFile = { uploadedFile }
        />
);
    expect(wrapper.exists('#error-chip')).toEqual(false);
});

test('File upload view shows error chip for incorrect file type', () => {
    const uploadedFile = { error: { data: { status: { file: [Constants.FILE_TYPE_NOT_ALLOWED] } } } };
    const wrapper = shallow(
        <FileUploadView
            uploadedFile = { uploadedFile }
            numFiles = { 1 }
        />
    );
    expect(wrapper.exists('#error-chip')).toEqual(true);
});

test('File upload view shows error chip for incorrect file size 1', () => {
    const uploadedFile = { error: { data: { status: { file: [Constants.FILE_SIZE_EXCEEDED] } } } };
    const wrapper = shallow(
        <FileUploadView
            uploadedFile = { uploadedFile }
            numFiles = { 1 }
        />
    );
    expect(wrapper.exists('#error-chip')).toEqual(true);
});

test('File upload view shows error chip for missing file', () => {
    const uploadedFile = { error: { data: { status: { file: [Constants.FILE_SIZE_REJECTED] } } } };
    const wrapper = shallow(
        <FileUploadView
            uploadedFile = { uploadedFile }
            numFiles = { 1 }
        />
    );
    expect(wrapper.exists('#error-chip')).toEqual(true);
});

test('File upload view shows error chip for incorrect file size 2', () => {
    const uploadedFile = { error: { data: { status: { file: [Constants.FILE_SIZE_EXCEEDED_STR] } } } };
    const wrapper = shallow(
        <FileUploadView
            uploadedFile = { uploadedFile }
        numFiles = { 1 }
        />
    );
    expect(wrapper.exists('#error-chip')).toEqual(true);
});

test('File upload view disables submit button if no file in file field', () => {
    const wrapper = shallow(
        <FileUploadView
            numFiles = { 0 }
        />
    );
    expect(wrapper.find('#submit-button').first().props().disabled).toEqual(true);
});

test('File upload view enables submit button if file is in file field', () => {
    const wrapper = shallow(
        <FileUploadView
            numFiles = { 1 }
        />
    );
    expect(wrapper.find('#submit-button').first().props().disabled).toEqual(false);
});