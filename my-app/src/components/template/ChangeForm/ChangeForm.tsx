import { Button, Form, Input, Typography } from 'antd'
import { RuleObject } from 'antd/lib/form';
import React, { ReactNode } from 'react'
<<<<<<< HEAD
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import { FormDataChangePassword } from 'src/constants/types/SignIn';
import apiClient from 'src/helper/api';
=======
>>>>>>> 3f74201 (add forms)
=======
import { useNavigate } from 'react-router-dom';
import { FormDataChangePassword } from 'src/constants/types/SignIn';
import apiClient from 'src/helper/api';
>>>>>>> c0933a2 (add request)
import { RULES_FORM } from 'src/rules';

export const ChangeForm = () => {
  const [form] = Form.useForm()
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c0933a2 (add request)
    const navigate = useNavigate()

  const onFinish = (values: FormDataChangePassword) => {
    apiClient().post('reset-password-confirmation/', { ...values, token: '0b351a32-4ff6-40d8-9df0-59de7d4bfc4b'}).then((res) => { 
        navigate('/')
    })
  }
<<<<<<< HEAD
=======
>>>>>>> 3f74201 (add forms)
=======
>>>>>>> c0933a2 (add request)

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
<<<<<<< HEAD
<<<<<<< HEAD
        <Form className='form' form={form} onFinish={onFinish} >
=======
        <Form className='form' form={form}>
>>>>>>> 3f74201 (add forms)
=======
        <Form className='form' form={form} onFinish={onFinish} >
>>>>>>> c0933a2 (add request)
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

