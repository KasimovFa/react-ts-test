import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from '../store/reducer/UserSlice';
import formGroupReducer from '../store/reducer/FormGroupSlice';

const rootReducer = combineReducers({
    userReducer,
    formGroupReducer,
});

export const setupReducer = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupReducer>;
export type AppDispatch = AppStore['dispatch'];
