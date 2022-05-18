import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import myReducerSlice from '../slices/myReducer/mySlice';

export const createStore = () =>
	configureStore({
		reducer: {
			myReducer: myReducerSlice,
		},
	});

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
