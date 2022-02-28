import { marvel } from '../actions/actionIndex.jsx';

export default (state = 'Puneet', action) => {
    switch (action.type) {
        case marvel.NEW_USER:
            return action.payload;
        default:
            return state;
    }
}