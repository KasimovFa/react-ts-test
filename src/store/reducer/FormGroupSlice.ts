/* eslint-disable @typescript-eslint/ban-types */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FormGroupState {
    readonlyInput: boolean;
}
const initialState: FormGroupState = {
    readonlyInput: true,
};

export const formGroupSlice = createSlice({
    name: 'formGroup',
    initialState,
    reducers: {
        setReadonlyInput(state, action: PayloadAction<boolean>) {
            state.readonlyInput = action.payload;
        },
    },
});
export const {setReadonlyInput} = formGroupSlice.actions;
export default formGroupSlice.reducer;
