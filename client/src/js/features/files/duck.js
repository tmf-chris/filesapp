import axios from 'axios';

// Actions
const PERFORMING_LOAD = 'filesapp/files/PERFORMING_LOAD';
const PERFORMED_LOAD = 'filesapp/files/PERFORMED_LOAD';
const FAILED_LOAD = 'filesapp/files/FAILED_LOAD';

// Reducer
export default function filesReducer(state = [], action) {
    switch (action.type) {
        case PERFORMED_LOAD:
            return action.payload;
        default:
            return state;
    }
}

// Action Creators
export function loadFiles() {
    return { type: PERFORMING_LOAD };
}

export function loadedFiles(data) {
    return { type: PERFORMED_LOAD, payload: data.files };
}

export function failedToLoadFiles(error) {
    return { type: FAILED_LOAD, payload: error };
}

// Thunks
export function getFiles() {
    return async (dispatch, getState) => {
        dispatch(loadFiles());
        try {
            const result = await axios.get('http://localhost:5000/api/files');
            console.log(result);
            dispatch(loadedFiles(result.data));
        } catch (error) {
            console.error('Error loading files', error);
            dispatch(failedToLoadFiles(error));
        }
    };
}