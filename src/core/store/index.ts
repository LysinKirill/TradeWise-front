/* eslint-disable @typescript-eslint/naming-convention */
import { configureStore, ThunkAction, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import reducer from './modules';

const makeStore = () => configureStore({
  reducer,
  devTools: true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, AnyAction>;
export type TypedDispatch = ThunkDispatch<AppState, any, AnyAction>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const store = makeStore();