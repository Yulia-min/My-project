import { Button, Form, Input, Typography } from 'antd'
import { RuleObject } from 'antd/lib/form';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FormDataChangePassword } from 'src/constants/types/SignIn'
import apiClient from 'src/helper/api'
import { RULES_FORM } from 'src/rules'
import './ChangeForm.scss'

export const ChangeForm = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const [isPasswordShow, setIsPasswordShow] = useState(false)

  const token = new URLSearchParams(window.location.search).get('token')

  const toggleIsPasswordShowValue = () => {
    setIsPasswordShow(!isPasswordShow)
  }
  
  const onFinish = (values: FormDataChangePassword) => {
    apiClient().post('reset-password-confirmation/', { ...values, token}).then((res) => { 
        navigate('/')
    })
  }

  const matchPassword  = () => ({
    validator(_: RuleObject, value: string) {
        if (!value || form.getFieldValue('password') === value) {
            return Promise.resolve();
        }
            return Promise.reject(new Error('The two passwords that you entered do not match!'));
        },
    })

  return (
    <>
        <Typography.Title level={2} className='title'>Change your password</Typography.Title>
        <Form className='form' form={form} onFinish={onFinish} >
            <div className='input-wrapper'>
                <Form.Item name="password" rules={[RULES_FORM.Password, RULES_FORM.PasswordCheck]}>
                    <Input autoComplete="new-password" className='input' type={ isPasswordShow ? 'text' : 'password'} placeholder='Password' />
                </Form.Item>
                <Button className='show-button' onClick={toggleIsPasswordShowValue}>{isPasswordShow ? 'Hide' : 'Show'}</Button>
            </div>
            <Form.Item
                name="confirm"
                dependencies={['password']}
                rules={[RULES_FORM.ConfirmPassword, matchPassword]}
            >
                <Input autoComplete="new-password" className='input' type={ isPasswordShow ? 'text' : 'password'} placeholder='Confirm password' />
            </Form.Item>        
            <Form.Item>
                <Button type="primary" htmlType="submit" className='button'>
                    Change Password
                </Button>
            </Form.Item>
        </Form> 
    </>
  )
}

