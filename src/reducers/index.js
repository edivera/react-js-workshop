import {combineReducers} from 'redux';

import people_reducer from './people_reducer';

const rootReducer = combineReducers({
    // basically register state and handler
    people: people_reducer
});

export default rootReducer;