import axios from 'axios';
import {setCurrentUser} from '../store/reducer/UserSlice';
import {IUser} from '../models/IUser';
import {AppDispatch} from '../store/store';

export const fetchUsersOne = (id: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<IUser>(
            `https://jsonplaceholder.typicode.com/users/${id}`,
        );
        dispatch(setCurrentUser(response.data));
    } catch (e) {
        console.log(e);
    }
};
