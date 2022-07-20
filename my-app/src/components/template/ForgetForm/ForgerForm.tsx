import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
import { Button, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { routes } from 'src/router/config/config.routes';
import './ForgetForm.scss';
import { RULES_FORM } from 'src/rules';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { FormDataForgotPassword } from 'src/constants/Api/SignIn/SignIn.d';
import { requestForgetForm } from 'src/redux/users/actions';
import { getErrorInfo } from 'src/redux/users/selectors';

export const ForgetForm = () => {
    const dispatch = useAppDispatch()
    const error = useAppSelector(getErrorInfo)
    const onFinish = (values: FormDataForgotPassword) => {
        dispatch(requestForgetForm({ email: values}))
    }
    return (
        <>
            <Typography.Title level={2} className='title'>Forgot your password?</Typography.Title>
            <Typography.Title level={5} className='description'>Enter your email to recieve instructions on how to reset your password.</Typography.Title>
            <Form className='form' onFinish={onFinish}>
                <Form.Item
                    name="email"
                    rules={[ RULES_FORM.Username]}
                >
                    <Input placeholder="Username or email" className='input' />
                </Form.Item>      
                {error && (<p className="error"> {error} </p>)}       
                <Form.Item>
                    <Button type="primary" htmlType="submit" className='button'>
                        Send Reset Instructions
                    </Button>
                </Form.Item>
                <Link to={routes.default} className='text-back'>Go back to sign in.</Link>
            </Form>
        </>

  )
}

