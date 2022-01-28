/* eslint-disable prettier/prettier */
import Button from '../UI/Button/Button';
import React from 'react';
import './styles.scss';
import {useAppDispatch, useAppSelector} from '../../hooks/hook';
import {setUsers} from '../../store/reducer/UserSlice';

const Nav: React.FC = () => {
    const dispatch = useAppDispatch();
    const {users} = useAppSelector((state) => state.userReducer);

    const sortCity = () => {
        const sortUser = [...users];
        sortUser.sort((a, b) => (a.address.city > b.address.city ? 1 : -1));
        dispatch(setUsers(sortUser));
    };

    const sortCompany = () => {
        const sortUser = [...users];
        sortUser.sort((a, b) => (a.company.name > b.company.name ? 1 : -1));
        dispatch(setUsers(sortUser));
    };

    return (
        <div className="nav">
            <h1 className="nav-title">Сортировка</h1>
            <Button
                type="primary"
                text="по городу"
                onClick={sortCity}
                width={150}
                height={35}
            />
            <Button
                type="primary"
                text="по компании"
                onClick={sortCompany}
                width={170}
                height={35}
            />
        </div>
    );
};

export default Nav;
