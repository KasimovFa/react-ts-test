import React from 'react';
import './loader.scss';

const Loader = () => {
    return (
        <div className="lds-container">
            <div className="lds-circle">
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
