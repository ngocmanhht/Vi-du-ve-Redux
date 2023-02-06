import {  combineReducers} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import CountReducer from './countReducer';
const rootReducer = combineReducers({
    count: CountReducer
    });
    export const store = createStore(rootReducer);