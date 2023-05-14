import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import greetingSlice from './slices/greetingSlice';

const persistConfig = {
  key: 'root',
  storage,
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistedReducer = persistReducer(persistConfig, greetingSlice);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
