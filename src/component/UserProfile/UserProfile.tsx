import {useAppDispatch, useAppSelector} from '../../hooks/hook';
import React, {useEffect} from 'react';
import './userprofile.scss';
import {useParams} from 'react-router-dom';
import Button from '../UI/Button/Button';
import FormGroup from '../UI/FormGroup/FormGroup';
import {setReadonlyInput} from '../../store/reducer/FormGroupSlice';
import {fetchUser} from '../../store/reducer/ActionCreators';
import Loader from '../../component/UI/Loader/Loader';

const UserProfile = () => {
    const dispatch = useAppDispatch();
    const {isLoading} = useAppSelector((state) => state.userReducer);
    const {userId} = useParams();
    useEffect(() => {
        dispatch(fetchUser(userId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const editForm = () => {
        dispatch(setReadonlyInput(false));
    };

    if (isLoading) {
        return <Loader />;
    }

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
