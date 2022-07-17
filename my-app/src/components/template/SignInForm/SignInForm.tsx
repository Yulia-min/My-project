import React, { ReactNode } from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input, Typography } from 'antd';
import './SignInForm.css';
import { Link } from 'react-router-dom';
import { routes } from 'src/router/config/config.routes';
import { FormDataSigIn } from 'src/constants/types/SignIn';
import { RULES_FORM } from 'src/rules';
import apiClient from 'src/helper/api';

export const SignInForm = () => {
  const onFinish = (values: FormDataSigIn) => {
    console.log(values)
    apiClient().get('users').then((response) => console.log(response.data))
  }
  return (
    <>
        <Typography.Title level={2} className='title'>Please sign in.</Typography.Title>
        <Form className='form' onFinish={onFinish}>
            <Form.Item
                name="username"
                rules={[
                {
                    type: 'email',
                    message: 'Incorrect!',
                },
                RULES_FORM.Username
                ]}
            >
                <Input autoComplete="new-password" placeholder="Username or email" className='input' />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[RULES_FORM.Password/* , RULES_FORM.PasswordCheck */]}
            >
                <Input.Password autoComplete="new-password" placeholder="Password" className='input' iconRender={(visible: ReactNode) => visible ? "Hide" : "Show"} />
            </Form.Item>     
            <Form.Item className='forgot-password'>
                <Link to={routes.forget} className='link'>
                    Forgot password
                </Link>
            </Form.Item>        
            <Form.Item>
                <Button type="primary" htmlType="submit" className='button'>
                    Sign In
                </Button>
            </Form.Item>
        </Form> 
        <div className='text'>
            <div className='text-item'>By signing in you agree to our </div>
            <Link className='link' to='/'>Privacy Policy</Link>
            <div className='text-item'>and</div>
            <Link className='link' to='/'>Terms of service.</Link>
         </div> 
    </>
  )
}

