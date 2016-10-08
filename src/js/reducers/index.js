import { combineReducers } from 'redux';

import { meta } from './metaReducer';
import { selections } from './selectionsReducer';
import { outcomes } from './outcomesReducer';

export default combineReducers({
    meta,
    selections,
    outcomes
});
