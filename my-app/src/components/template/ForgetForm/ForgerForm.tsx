import React from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { routes } from 'src/router/config/config.routes';
import './ForgetForm.css';
import { RULES_FORM } from 'src/rules';

export const ForgetForm = () => {
  return (
    <>
        <Typography.Title level={2} className='title'>Forgot your password?</Typography.Title>
        <Typography.Title level={5} className='description'>Enter your email to recieve instructions on how to reset your password.</Typography.Title>
        <Form className='form'>
            <Form.Item
                name="username"
                rules={[
                {
                    type: 'email',
                    message: 'Incorrect!',
                }, RULES_FORM.ForgetPassword
                ]}
            >
                <Input placeholder="Username or email" className='input' />
            </Form.Item>             
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

