import React, { useEffect, useRef, useState } from 'react';
import 'antd/dist/antd.min.css'
import { Button, Form, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { routes } from 'src/router/config/config.routes';
import './ForgetForm.scss';
import { RULES_FORM } from 'src/rules';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { FormDataForgotPassword } from 'src/constants/Api/SignIn/SignIn.d';
import { requestForgetForm } from 'src/redux/users/actions';
import { getErrorInfo } from 'src/redux/users/selectors';
import { Input } from 'src/components/atoms/Input/Input';

export const ForgetPasswordForm = () => {
    const dispatch = useAppDispatch()
    const error = useAppSelector(getErrorInfo)

    const [email, setEmail] = useState<string>()
    const [form] = Form.useForm()

    const emailErrorRef = useRef(error)

    useEffect(() => {
        emailErrorRef.current = error;
        if (error) {
            form.validateFields()
        }
      }, [error]);

    const onFinish = (values: FormDataForgotPassword) => {
        dispatch(requestForgetForm({ email: values}))
    }

    const onChange = (e: { target: { value: React.SetStateAction<string | undefined> } }) => {
        setEmail(e.target.value)
    }

    const getEmailError = () => ({
        validator: async () => {
            if (error) {
              return Promise.reject(new Error('The email you entered does not belong to any account.'));
            }
          },
      })

    return (
        <>
            <Typography.Title level={2} className='title'>Forgot your password?</Typography.Title>
            <Typography.Title level={5} className='description'>Enter your email to recieve instructions on how to reset your password.</Typography.Title>
            <Form className='form' onFinish={onFinish} form={form} >
                <Form.Item
                    name="email"
                    rules={[ RULES_FORM.Username, getEmailError]}
                >
                    <Input className='input' value={email} onChange={onChange} label="Email" />
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

