import React from 'react';
import Nav from './component/Nav/Nav';
import './app.scss';
import {Route, Routes} from 'react-router-dom';
import UserList from './component/UserList/UserList';
import UserProfile from './component/UserProfile/UserProfile';
const App: React.FC = () => {
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
