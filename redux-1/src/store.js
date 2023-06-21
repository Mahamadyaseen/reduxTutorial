import {createStore} from 'redux'

import rootReducer from "./reducres/updown";


const store =createStore(rootReducer)
export default store;
