import changeTheNumber from "./updown";
import addActors from './updown';

import {combineReducers} from 'redux';

const rootReducer= combineReducers({
    changeTheNumber,
    addActors
})
export default rootReducer;