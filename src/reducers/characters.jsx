import { marvel } from '../actions/actionIndex.jsx';

export default (state = [], action) => {
    switch (action.type) {
        case marvel.SET_CHARACTERS:
            return action.data
        default:
            return state;
    }
}