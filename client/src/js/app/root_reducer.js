import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { filesReducer, uploadFileReducer } from '../features/files/duck';
import { dialogsReducer } from "../features/dialogs/duck";

const rootReducer = combineReducers({
    form: formReducer,
    files: filesReducer,
    dialogs: dialogsReducer,
    uploaded_file: uploadFileReducer
});

export default rootReducer;