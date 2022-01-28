import User from '../User/User';
import React from 'react';
import './userList.scss';
import {useAppSelector} from '../../hooks/hook';

const UserList = () => {
    const {users} = useAppSelector((state) => state.userReducer);
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
