/* eslint-disable react-hooks/exhaustive-deps */
import User from '../User/User';
import React, {useEffect} from 'react';
import './userList.scss';
import {useAppDispatch, useAppSelector} from '../../hooks/hook';
import {fetchUsers} from '../../store/reducer/ActionCreators';
import Loader from '../../component/UI/Loader/Loader';

const UserList = () => {
    const {users} = useAppSelector((state) => state.userReducer);
    const {isLoading} = useAppSelector((state) => state.userReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (isLoading) {
        return <Loader />;
    }
    return (
        <div className="userList">
            <div className="userList_wrapper">
                <h1 className="userList_wrapper_title">Список пользователей</h1>
                {users.map((user) => (
                    <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        city={user.address.city}
                        company={user.company.name}
                    />
                ))}
                <p className="userList_footer-text">
                    Найдено {users.length} пользователей
                </p>
            </div>
        </div>
    );
};

export default UserList;
