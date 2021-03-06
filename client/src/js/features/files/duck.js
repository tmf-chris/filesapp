import axios from 'axios';
import { hideDialog } from '../dialogs/duck';
import * as Constants from '../../constants';

const FILES_URL = Constants.SERVER_URL + 'files';

// Actions
const PERFORMING_LOAD = 'filesapp/files/PERFORMING_LOAD';
const PERFORMED_LOAD = 'filesapp/files/PERFORMED_LOAD';
const FAILED_LOAD = 'filesapp/files/FAILED_LOAD';

const PERFORMING_UPLOAD = 'filesapp/files/PERFORMING_UPLOAD';
const PERFORMED_UPLOAD = 'filesapp/files/PERFORMED_UPLOAD';
const FAILED_UPLOAD = 'filesapp/files/FAILED_UPLOAD';
const CLEAR_UPLOAD_ERROR = 'filesapp/files/CLEAR_UPLOAD_ERROR';

const PERFORMING_DELETE = 'filesapp/files/PERFORMING_DELETE';
const PERFORMED_DELETE = 'filesapp/files/PERFORMED_DELETE';
const FAILED_DELETE = 'filesapp/files/FAILED_DELETE';

// Reducers
export function filesReducer(state = { status: 'none', data: [], error: '' }, action) {
    switch (action.type) {
        case PERFORMING_LOAD:
            return { ...state, status: Constants.REQUESTING };
        case PERFORMED_LOAD:
            return { status: Constants.RECEIVED, data: action.payload, error: '' };
        case FAILED_LOAD:
            return { ...state, status: Constants.FAILED, error: action.payload };
        default:
            return state;
    }
}

export function uploadFileReducer(state = { status: 'none', data: {}, error: '' }, action) {
    switch (action.type) {
        case PERFORMING_UPLOAD:
            return { ...state, status: Constants.REQUESTING };
        case PERFORMED_UPLOAD:
            return { status: Constants.RECEIVED, data: action.payload, error: '' };
        case FAILED_UPLOAD:
            return { ...state, status: Constants.FAILED, error: action.payload };
        case CLEAR_UPLOAD_ERROR:
            return { ...state, status: 'none', error: '' };
        default:
            return state;
    }
}

export function deleteFilesReducer(state = { status: 'none', data: [], error: '' }, action) {
    switch (action.type) {
        case PERFORMING_DELETE:
            return { ...state, status: Constants.REQUESTING };
        case PERFORMED_DELETE:
            return { ...state, status: Constants.RECEIVED, error: '' };
        case FAILED_DELETE:
            return { ...state, status: Constants.FAILED, error: action.payload };
        default:
            return state;
    }
}

// Action Creators
function loadFiles() {
    return { type: PERFORMING_LOAD };
}

function loadedFiles(data) {
    return { type: PERFORMED_LOAD, payload: data.files };
}

export function failedToLoadFiles(error) {
    return { type: FAILED_LOAD, payload: error };
}

function uploadFile() {
    return { type: PERFORMING_UPLOAD };
}

function uploadedFile(data) {
    return { type: PERFORMED_UPLOAD, payload: data.file };
}

function failedToUploadFile(error) {
    return { type: FAILED_UPLOAD, payload: error };
}

export function clearUploadError() {
    return { type: CLEAR_UPLOAD_ERROR };
}

function deleteFiles() {
    return { type: PERFORMING_DELETE };
}

function deletedFiles(data) {
    return { type: PERFORMED_DELETE };
}

function failedToDeleteFile(error) {
    return { type: FAILED_DELETE, payload: error };
}

// Thunks
export function getFiles() {
    return async (dispatch, getState) => {
        dispatch(loadFiles());
        try {
            const result = await axios.get(
                FILES_URL
            );
            dispatch(loadedFiles(result.data));
        } catch (error) {
            console.error('Error loading files', error.response);
            dispatch(failedToLoadFiles(error.response));
        }
    };
}

export function doUploadFile(data) {
    return async (dispatch, getState) => {
        dispatch(uploadFile());
        try {
            const formData = new FormData();
            formData.append('file', data.file);
            const result = await axios.post(
                FILES_URL,
                formData,
                { headers: {'Content-Type': 'multipart/form-data' } }
            );
            dispatch(uploadedFile(result.data));
            dispatch(hideDialog('upload'));
            dispatch(getFiles());
        } catch (error) {
            console.error('Error uploading file', error.response);
            dispatch(failedToUploadFile(error.response));
        }
    };
}

export function doDeleteFiles(data) {
    return async (dispatch, getState) => {
        dispatch(deleteFiles());
        try {
            const result = await axios.delete(
                FILES_URL,
                { params: { ids: data } }
            );
            dispatch(deletedFiles(result.data));
            dispatch(getFiles());
        } catch (error) {
            console.error('Error deleting files', error.response);
            dispatch(failedToDeleteFiles(error.response));
        }
    };
}