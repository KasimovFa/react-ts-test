/* eslint-disable @typescript-eslint/ban-types */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../../models/IUser';
import {fetchUsers} from './ActionCreators';

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
        setCurrentUser(state, action: PayloadAction<IUser>) {
            state.currentUser = action.payload;
        },
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
    },
});

export const {setCurrentUser, setUsers} = userSlice.actions;
export default userSlice.reducer;
