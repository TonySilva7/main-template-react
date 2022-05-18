import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { productService } from '../../services/myExampleService';

export interface IMyState {
  num: number;
  user: UserProps;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  isLoggedIn: boolean;
}

export type UserProps = {
  id: number;
  name: string;
  url: string;
  avatar_url: string;
};

const initialState: IMyState = {
  num: 0,
  user: { id: 0, name: '', url: '', avatar_url: '' },
  status: 'idle',
  isLoggedIn: true,
};

// Thunk Function
export const getMyData = createAsyncThunk('games', async (url: string) => {
  const response = await productService.fetchMyData(url);
  return response.data;
});

export const mySlice = createSlice({
  name: 'mySlice',
  initialState,

  reducers: {
    handleIncrement: (state) => {
      state.num += 1;
    },
    handleDecrement: (state) => {
      state.num -= 1;
    },
    handleLogin: (state, action) => {
      state.isLoggedIn = !!action.payload;
    },
  },

  extraReducers: (builder: ActionReducerMapBuilder<IMyState>) => {
    builder.addCase(
      getMyData.fulfilled,
      (state, action: PayloadAction<any, string>) => {
        // state.user = action.payload.data.login;
        state.user = action.payload;
        console.log(state.user);
        state.status = 'succeeded';
      },
    );

    builder.addCase(getMyData.rejected, (state) => {
      state.status = 'failed';
    });

    builder.addCase(getMyData.pending, (state) => {
      state.status = 'pending';
    });
  },
});

export const { handleIncrement, handleDecrement, handleLogin } =
  mySlice.actions;

export const selectMyNum = (state: RootState) => state.myReducer.num;
export const selectUser = (state: RootState) => state.myReducer.user;
export const selectStatus = (state: RootState) => state.myReducer.status;
export const selectAuth = (state: RootState) => state.myReducer.isLoggedIn;

export default mySlice.reducer;
