import {createStore} from 'redux';
import reducers from 'index';

let store = createStore(reducers);

export default store;