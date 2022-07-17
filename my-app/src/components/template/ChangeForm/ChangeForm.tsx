import { Button, Form, Input, Typography } from 'antd'
import { RuleObject } from 'antd/lib/form';
import React, { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom';
import { FormDataChangePassword } from 'src/constants/types/SignIn';
import apiClient from 'src/helper/api';
import { RULES_FORM } from 'src/rules';

export const ChangeForm = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const onFinish = (values: FormDataChangePassword) => {
    apiClient().post('reset-password-confirmation/', { ...values, token: '0b351a32-4ff6-40d8-9df0-59de7d4bfc4b'}).then((res) => { 
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
            <Form.Item name="password" rules={[RULES_FORM.Password]}>
                <Input.Password placeholder='Password' iconRender={(visible: ReactNode) => visible ? "Hide" : "Show"} />
            </Form.Item>
            <Form.Item
                name="confirm"
                dependencies={['password']}
                rules={[RULES_FORM.ConfirmPassword, matchPassword]}
            >
                <Input.Password placeholder='Confirm password' iconRender={(visible: ReactNode) => visible ? "Hide" : "Show"} />
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

