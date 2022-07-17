import React, { ReactNode } from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input, Typography } from 'antd';
import './SignInForm.css';
<<<<<<< HEAD
import { Link, useNavigate } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
>>>>>>> 3f74201 (add forms)
import { routes } from 'src/router/config/config.routes';
import { FormDataSigIn } from 'src/constants/types/SignIn';
import { RULES_FORM } from 'src/rules';
import apiClient from 'src/helper/api';

export const SignInForm = () => {
<<<<<<< HEAD
  const navigate = useNavigate()
  const onFinish = (values: FormDataSigIn) => {
    apiClient().post('login/', values).then((res) => { 
        localStorage.setItem('email', res.data.email)
        localStorage.setItem('access_token', res.data.access)
        localStorage.setItem('user_id', res.data.id)
        localStorage.setItem('refresh_token', res.data.refresh)
        navigate('/main')
    })
=======
  const onFinish = (values: FormDataSigIn) => {
    console.log(values)
    apiClient().get('users').then((response) => console.log(response.data))
>>>>>>> 3f74201 (add forms)
  }
  return (
    <>
        <Typography.Title level={2} className='title'>Please sign in.</Typography.Title>
        <Form className='form' onFinish={onFinish}>
            <Form.Item
<<<<<<< HEAD
                name="email"
                rules={[RULES_FORM.Username]}
=======
                name="username"
                rules={[
                {
                    type: 'email',
                    message: 'Incorrect!',
                },
                RULES_FORM.Username
                ]}
>>>>>>> 3f74201 (add forms)
            >
                <Input autoComplete="new-password" placeholder="Username or email" className='input' />
            </Form.Item>
            <Form.Item
                name="password"
<<<<<<< HEAD
                rules={[RULES_FORM.Password, RULES_FORM.PasswordCheck]}
=======
                rules={[RULES_FORM.Password/* , RULES_FORM.PasswordCheck */]}
>>>>>>> 3f74201 (add forms)
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
