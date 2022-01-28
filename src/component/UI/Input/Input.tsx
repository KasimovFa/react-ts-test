/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import React from 'react';
import './input.scss';

export interface PropsInput {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e?: any) => void;
    touched: boolean;
    valid: boolean;
    errorMessage?: string;
    labelText: string;
    idInput: string;
    htmlForLabel: string;
    readonly: boolean;
}

const Input = ({
    type,
    placeholder,
    value,
    onChange,
    touched,
    valid,
    errorMessage,
    labelText,
    idInput,
    htmlForLabel,
    readonly,
}: PropsInput) => {
    let clsI = ['input'];

    if (!valid && touched) {
        clsI = ['input', 'input-error'];
    }

    return (
        <>
            <label className="label" htmlFor={htmlForLabel}>
                {labelText}
            </label>
            {readonly ?
                <input
                    className={clsI.join(' ')}
                    id={idInput}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    readOnly
                /> // eslint-disable-next-line prettier/prettier
                :
                 <input
                    className={clsI.join(' ')}
                    id={idInput}
                    type={type}
                    placeholder={placeholder}
                    value={value || ''}
                    onChange={onChange}
                />
           }
            {!valid && touched ? (
                <span
                    style={{
                        color: 'red',
                        fontSize: '20px',
                        fontWeight: 'bold',
                    }}>
                    {errorMessage ? errorMessage : null}
                </span>
            ) : null}
        </>
    );
};

export default Input;
