import {combineReducers} from 'redux';

import people_reducer from './people_reducer';
import details_reducer from './details_reducer';

const rootReducer = combineReducers({
    // basically register state and handler
    people: people_reducer,
    details: details_reducer
});

export default rootReducer;