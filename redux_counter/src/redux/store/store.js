import { createStore } from 'redux';
import reducers from '../redusers/reducer';

const store = createStore(reducers);


export default store;