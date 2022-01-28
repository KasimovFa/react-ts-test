/* eslint-disable react-hooks/exhaustive-deps */
import {useAppDispatch, useAppSelector} from './hooks/hook';
import React, {useEffect} from 'react';
import Nav from './component/Nav/Nav';
import {fetchUsers} from './store/reducer/ActionCreators';
import './app.scss';
import {Route, Routes} from 'react-router-dom';
import UserList from './component/UserList/UserList';
import UserProfile from './component/UserProfile/UserProfile';
const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const {isLoading} = useAppSelector((state) => state.userReducer);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="app">
            <Nav />
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path={'users'}>
                    <Route index element={<UserProfile />} />
                    <Route path={':userId'} element={<UserProfile />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
