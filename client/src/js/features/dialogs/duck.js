// Actions
const SHOW_DIALOG = 'filesapp/dialogs/SHOW_DIALOG';
const HIDE_DIALOG = 'filesapp/dialogs/HIDE_DIALOG';

// Reducer
export function dialogsReducer(state = {}, action) {
    switch (action.type) {
        case SHOW_DIALOG:
            return { ...state, [action.payload.name]: true };
        case HIDE_DIALOG:
            return { ...state, [action.payload.name]: false };
        default:
            return state;
    }
}

// Action Creators
function showDialogAction(name) {
    return { type: SHOW_DIALOG, payload: { name: name } };
}

function hideDialogAction(name) {
    return { type: HIDE_DIALOG, payload: { name: name } };
}

// Thunks
export function showDialog(name) {
    return async (dispatch, getState) => {
        dispatch(showDialogAction(name));
    };
}

export function hideDialog(name) {
    return async (dispatch, getState) => {
        dispatch(hideDialogAction(name));
    };
}