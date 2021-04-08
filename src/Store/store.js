import { createStore } from 'redux'
import rootReducer from './reducers/rootReducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = () => {
    let store = createStore(persistedReducer)
    
    let persistor = persistStore(store)
    
  return { store, persistor }
}

export default store()