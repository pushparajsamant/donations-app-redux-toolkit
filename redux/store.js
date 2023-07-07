import User from './reducers/User';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {logger} from 'redux-logger/src';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';
import Category from './reducers/Category';
import Donation from './reducers/Donation';
const rootReducer = combineReducers({
  user: User,
  categories: Category,
  donations: Donation,
});
const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const persistedReducer = persistReducer(configuration, rootReducer);

const Store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // }).concat(logger),
});
export const persistor = persistStore(Store);
//Reset store
//persistor.purge();
export default Store;
