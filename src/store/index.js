import {createStore} from 'redux';
import loginReducer from '@/reducers/index.js'

const store = createStore(loginReducer)


export default store