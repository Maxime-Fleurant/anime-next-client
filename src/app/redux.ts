import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { animeListPageReducers } from '../features/anime/animeSearch/redux/animeListSlice';
import { lightReducer } from '../features/layout/redux/themeSlice';

let store: any;

const reducer = combineReducers({ animeListPageReducers, lightReducer });
export type TStore = ReturnType<typeof reducer>;

function initStore() {
  const storeInit = configureStore({
    reducer,
  });
  return storeInit;
}

export const initializeStore = () => {
  const _store = store ?? initStore();

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore() {
  const hookStore = initializeStore();
  return hookStore;
}
