/* eslint-disable react-hooks/exhaustive-deps */
import {useAppSelector} from '../../../hooks/hook';
import React, {useEffect, useRef} from 'react';
import Input from '../Input/Input';
import './formGroup.scss';
import useInput from '../../../hooks/useInput';
import Button from '../Button/Button';

const FormGroup = () => {
    const {currentUser} = useAppSelector((state) => state.userReducer);
    const {readonlyInput} = useAppSelector((state) => state.formGroupReducer);
    const ref = useRef(null);

    const name = useInput({
        value: '',
        touched: false,
        valid: false,
        readonly: true,
    });

    const username = useInput({
        value: '',
        touched: false,
        valid: false,
        readonly: true,
    });

    const email = useInput({
        value: '',
        touched: false,
        valid: false,
        readonly: true,
    });

    const street = useInput({
        value: '',
        touched: false,
        valid: false,
        readonly: true,
    });

    const city = useInput({
        value: '',
        touched: false,
        valid: false,
        readonly: true,
    });

    const zipcode = useInput({
        value: '',
        touched: false,
        valid: false,
        readonly: true,
    });
    const phone = useInput({
        value: '',
        touched: false,
        valid: false,
        readonly: true,
    });
    const website = useInput({
        value: '',
        touched: false,
        valid: false,
        readonly: true,
    });

    useEffect(() => {
        name.onChange(currentUser.name, readonlyInput);
        username.onChange(currentUser.username, readonlyInput);
        email.onChange(currentUser.email, readonlyInput);
        street.onChange(currentUser.address?.street, readonlyInput);
        city.onChange(currentUser.address?.city, readonlyInput);
        zipcode.onChange(currentUser.address?.zipcode, readonlyInput);
        website.onChange(currentUser.website, readonlyInput);
        phone.onChange(currentUser.phone, readonlyInput);
    }, [currentUser, readonlyInput]);

    const handlerValidForm = () => {
        const data = {};
        const formVal = componentInput.every((i) =>
            i.props.valid ? true : false,
        );
        if (formVal) {
            componentInput.forEach((i) => {
                data[i.props.idInput] = i.props.value;
            });
            data['commit'] = ref.current.value;
            console.log(JSON.stringify(data));
        }
    };

    const componentInput = [
        <Input
            key={1}
            type={'text'}
            placeholder={'Введите имя'}
            onChange={name.onChange}
            valid={name.input.valid}
            touched={name.input.touched}
            value={name.input.value}
            labelText={'Name'}
            idInput={'name'}
            htmlForLabel={'name'}
            readonly={name.input.readonly}
        />,
        <Input
            key={2}
            type={'text'}
            placeholder={'Введите логин'}
            onChange={username.onChange}
            touched={username.input.touched}
            valid={username.input.valid}
            value={username.input.value}
            labelText={'User name'}
            idInput={'userName'}
            htmlForLabel={'userName'}
            readonly={username.input.readonly}
        />,
        <Input
            key={3}
            type={'email'}
            placeholder={'Введите почту'}
            onChange={email.onChange}
            touched={email.input.touched}
            valid={email.input.valid}
            value={email.input.value}
            labelText={'E-mail'}
            idInput={'email'}
            htmlForLabel={'email'}
            readonly={email.input.readonly}
        />,
        <Input
            key={4}
            type={'text'}
            placeholder={'Введите улицу'}
            onChange={street.onChange}
            touched={street.input.touched}
            valid={street.input.valid}
            value={street.input.value}
            labelText={'Street'}
            idInput={'street'}
            htmlForLabel={'street'}
            readonly={street.input.readonly}
        />,
        <Input
            key={5}
            type={'text'}
            placeholder={'Введите город'}
            onChange={city.onChange}
            touched={city.input.touched}
            valid={city.input.valid}
            value={city.input.value}
            labelText={'City'}
            idInput={'city'}
            htmlForLabel={'city'}
            readonly={city.input.readonly}
        />,
        <Input
            key={6}
            type={'text'}
            placeholder={'Введите индекс'}
            onChange={zipcode.onChange}
            touched={zipcode.input.touched}
            valid={zipcode.input.valid}
            value={zipcode.input.value}
            labelText={'Zip code'}
            idInput={'zipcode'}
            htmlForLabel={'zipcode'}
            readonly={zipcode.input.readonly}
        />,
        <Input
            key={7}
            type={'text'}
            placeholder={'Введите телефон'}
            onChange={phone.onChange}
            touched={phone.input.touched}
            valid={phone.input.valid}
            value={phone.input.value}
            labelText={'Iphone'}
            idInput={'iphone'}
            htmlForLabel={'iphone'}
            readonly={phone.input.readonly}
        />,
        <Input
            key={8}
            type={'text'}
            placeholder={'Введите сайт'}
            onChange={website.onChange}
            touched={website.input.touched}
            valid={website.input.valid}
            value={website.input.value}
            labelText={'Website'}
            idInput={'website'}
            htmlForLabel={'website'}
            readonly={website.input.readonly}
        />,
    ];

    return (
        <div className="form_group">
            <div className="form_group_wrapper">
                {componentInput.map((Input) => Input)}
                {readonlyInput ? (
                    <textarea
                        ref={ref}
                        className="form_group_textarea"
                        readOnly></textarea>
                ) : (
                    <textarea
                        ref={ref}
                        className="form_group_textarea"></textarea>
                )}
            </div>
            <div className="form_group-btn">
                <Button
                    type={'success'}
                    width={200}
                    height={35}
                    disabled={readonlyInput}
                    text="Отправить"
                    onClick={handlerValidForm}
                />
            </div>
        </div>
    );
};

export default FormGroup;
