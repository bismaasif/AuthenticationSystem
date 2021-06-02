import {applyMiddleware,createStore} from 'redux'
import RootReducer from './RootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
var middleware = []

var Store = createStore(RootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
    )

export default Store