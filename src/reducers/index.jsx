import {combineReducers} from 'redux';
import ActiveUser from './activeUser.jsx';
import Characters from './characters';

const reducers = combineReducers({
    characters: Characters,
    activeUser: ActiveUser    
});

export default reducers;
