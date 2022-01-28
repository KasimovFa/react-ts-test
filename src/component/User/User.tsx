import React from 'react';
import './user.scss';
import {useNavigate} from 'react-router-dom';

interface PropsTypeUser {
    id: number;
    name: string;
    city: string;
    company: string;
}

const User = ({id, name, city, company}: PropsTypeUser) => {
    const navigate = useNavigate();

    return (
        <div className="user">
            <div className="user-name">
                ФИО: <p className="user-name-value">{name}</p>
            </div>
            <div className="user-name">
                город: <p className="user-name-value">{city}</p>
            </div>
            <div className="user-name">
                <div className="user-name-wrapper">
                    компания: <p className="user-name-value">{company}</p>
                    <p
                        className="user-btn"
                        onClick={() => navigate(`/users/${id}`)}>
                        Подробнее
                    </p>
                </div>
            </div>
        </div>
    );
};

export default User;
