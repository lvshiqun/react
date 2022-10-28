import { legacy_createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from './reducers'

const store = legacy_createStore(reducer, applyMiddleware(reduxThunk));

export default store