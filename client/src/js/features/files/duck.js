import axios from 'axios';
import * as Constants from '../../constants';

// Actions
const PERFORMING_LOAD = 'filesapp/files/PERFORMING_LOAD';
const PERFORMED_LOAD = 'filesapp/files/PERFORMED_LOAD';
const FAILED_LOAD = 'filesapp/files/FAILED_LOAD';

const PERFORMING_UPLOAD = 'filesapp/files/PERFORMING_UPLOAD';
const PERFORMED_UPLOAD = 'filesapp/files/PERFORMED_UPLOAD';
const FAILED_UPLOAD = 'filesapp/files/FAILED_UPLOAD';

// Reducers
export function filesReducer(state = { status: 'none', data: [] }, action) {
    switch (action.type) {
        case PERFORMING_LOAD:
            return { ...state, status: Constants.REQUESTING };
        case PERFORMED_LOAD:
            return { status: Constants.RECEIVED, data: action.payload };
        case FAILED_LOAD:
            return { ...state, status: Constants.FAILED };
        default:
            return state;
    }
}

export function uploadFileReducer(state = { status: 'none', data: {} }, action) {
    switch (action.type) {
        case PERFORMING_UPLOAD:
            return { ...state, status: Constants.REQUESTING };
        case PERFORMED_UPLOAD:
            return { status: Constants.RECEIVED, data: action.payload };
        case FAILED_UPLOAD:
            return { ...state, status: Constants.FAILED };
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

function failedToLoadFiles(error) {
    return { type: FAILED_LOAD, payload: error };
}

function uploadFile() {
    return { type: PERFORMING_UPLOAD };
}

function uploadedFile(data) {
    return { type: PERFORMED_UPLOAD, payload: data.file };
}

function failedToUploadFile(error) {
    return { type: FAILED_LOAD, payload: error };
}

// Thunks
export function getFiles() {
    return async (dispatch, getState) => {
        dispatch(loadFiles());
        try {
            const result = await axios.get(Constants.SERVER_URL+'files');
            dispatch(loadedFiles(result.data));
        } catch (error) {
            console.error('Error loading files', error);
            dispatch(failedToLoadFiles(error));
        }
    };
}

export function doUploadFile(data) {
    return async (dispatch, getState) => {
        dispatch(uploadFile());
        try {
            const formData = new FormData();
            formData.append('file', data.file);
            const result = await axios.post(Constants.SERVER_URL+'files', formData);
            dispatch(uploadedFile(result.data));
            dispatch(getFiles());
        } catch (error) {
            console.error('Error uploading file', error);
            dispatch(failedToUploadFile(error));
        }
    };
}