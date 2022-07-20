import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { routes } from 'src/router/config/config.routes';
import './ForgetForm.scss';
import { RULES_FORM } from 'src/rules';
import { FormDataForgotPassword } from 'src/types/signIn/SignIn';
import apiClient from 'src/helper/api';

export const ForgetForm = () => {
    const [ errorEmailMessage, setErrorEmailMessage ] = useState('')
    const onFinish = (values: FormDataForgotPassword) => {
        apiClient().post('reset-password/', values).catch((error) => {
            setErrorEmailMessage(error.response.data)
        } )
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
                {errorEmailMessage && (<p className="error"> {errorEmailMessage} </p>)}       
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

