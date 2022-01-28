/* eslint-disable @typescript-eslint/ban-types */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
    disabledBtn: boolean;
    readonlyInput: boolean;
}
const initialState: UserState = {
    disabledBtn: false,
    readonlyInput: true,
};

export const formGroupSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setDisabled(state, action: PayloadAction<boolean>) {
            state.disabledBtn = action.payload;
        },
        setReadonlyInput(state, action: PayloadAction<boolean>) {
            state.readonlyInput = action.payload;
        },
    },
});
export const {setDisabled, setReadonlyInput} = formGroupSlice.actions;
export default formGroupSlice.reducer;
