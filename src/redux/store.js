import {createStore, combineReducers} from 'redux'
import reducerList from './reducerList'

// START - SỬ DỤNG combineReducer =================================================================
const rootReducer = combineReducers({
  rootReducerList: reducerList,
})

const store = createStore(
  rootReducer,
  // for Redux Tools extension Chrome
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// END - SỬ DỤNG combineReducer =================================================================

// START - KHÔNG SỬ DỤNG combineReducer =================================================================
// const store = createStore(
//   reducerList,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
// END - KHÔNG SỬ DỤNG combineReducer =================================================================
  


export default store

