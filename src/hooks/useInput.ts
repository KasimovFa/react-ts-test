import {useState} from 'react';

const useInput = (initialValue) => {
    const [input, setValue] = useState(initialValue);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e: any, readonly?: boolean) => {
        if (typeof e === 'string') {
            setValue((prev) => {
                return {
                    ...prev,
                    valid: true,
                    value: e,
                    readonly,
                };
            });
        } else {
            let valid = false;
            const value = e?.target?.value;
            if (value) {
                valid = true;
            }
            setValue((prev) => {
                return {
                    ...prev,
                    value: value || ' ',
                    touched: true,
                    valid,
                    readonly,
                };
            });
        }
    };

    return {
        input,
        onChange: handleChange,
    };
};

export default useInput;
