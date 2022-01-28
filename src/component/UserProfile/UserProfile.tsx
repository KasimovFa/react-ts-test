import {useAppDispatch} from '../../hooks/hook';
import React, {useEffect} from 'react';
import './userprofile.scss';
import {fetchUsersOne} from '../../api/UserApi';
import {useParams} from 'react-router-dom';
import Button from '../UI/Button/Button';
import FormGroup from '../UI/FormGroup/FormGroup';
import {setReadonlyInput} from '../../store/reducer/FormGroupSlice';

const UserProfile = () => {
    const dispatch = useAppDispatch();
    const {userId} = useParams();
    useEffect(() => {
        dispatch(fetchUsersOne(userId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const editForm = () => {
        dispatch(setReadonlyInput(false));
    };

    return (
        <div className="userProfile">
            <div className="userProfile_header">
                <h1 className="userProfile_header-title">
                    Профиль пользователя
                </h1>
                <Button
                    type={'primary'}
                    width={200}
                    height={35}
                    text="Редактировать"
                    onClick={editForm}
                />
            </div>
            <FormGroup />
        </div>
    );
};

export default UserProfile;
