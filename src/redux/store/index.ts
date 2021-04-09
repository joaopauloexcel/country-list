import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import reducer from '../reducers';
import ReduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from '../reducers/index';
const persistConfig = {
  key: 'countries',
  storage,
};
const rootReducer = combineReducers({
  global: reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers)
const storePersisted: Store = createStore(persistedReducer);

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export const persistor = persistStore(storePersisted);