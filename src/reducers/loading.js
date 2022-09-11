import {
    LOADING_STARTED,
    LOADING_FINISHED
} from "../actions/types";


function loadingReducer (state = false, action) {
    const {type, payload} = action;
    switch(type) {
        case LOADING_STARTED:
            return true;
        case LOADING_FINISHED:
            return false;
        default:
            return state;
    }
}

export default loadingReducer;