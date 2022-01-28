import React from 'react';
import './button.scss';

interface PropsTypeBtn {
    type: string;
    disabled?: boolean;
    text: string;
    onClick: () => void;
    width: number;
    height: number;
}

const Button = ({
    type,
    disabled,
    text,
    onClick,
    width,
    height,
}: PropsTypeBtn) => {
    const cls = [type];
    if (disabled) {
        cls.push('disabled');
    }
    return (
        <button
            className={cls.join(' ')}
            style={{width: `${width}` + 'px', height: `${height}` + 'px'}}
            onClick={onClick}
            disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
