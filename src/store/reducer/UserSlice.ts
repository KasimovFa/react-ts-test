/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../../models/IUser';
import {fetchUser, fetchUsers} from './ActionCreators';

interface UserState {
    users: IUser[];
    isLoading: boolean;
    currentUser: IUser;
}
const initialState: UserState = {
    users: [],
    isLoading: false,
    currentUser: {} as IUser,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<IUser[]>) {
            state.users = action.payload;
        },
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (
            state,
            action: PayloadAction<IUser[]>,
        ) => {
            state.isLoading = false;
            state.users = action.payload;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state) => {
            state.isLoading = false;
        },
        [fetchUser.fulfilled.type]: (
            state,
            action: PayloadAction<IUser>,
        ) => {
            state.isLoading = false;
            state.currentUser = action.payload;
        },
        [fetchUser.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUser.rejected.type]: (state) => {
            state.isLoading = false;
        },
    },
});

export const {setUsers} = userSlice.actions;
export default userSlice.reducer;
