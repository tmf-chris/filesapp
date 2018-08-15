import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import filesReducer from '../features/files/duck';

const rootReducer = combineReducers({
    form: formReducer,
    files: filesReducer
});

export default rootReducer;