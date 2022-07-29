import { Button, Form, Typography } from 'antd'
import { RuleObject } from 'antd/lib/form';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Input } from 'src/components/atoms/Input/Input';
import { FormDataChangePassword } from 'src/constants/Api/SignIn/SignIn.d';
import { useAppDispatch } from 'src/redux/hooks';
import { requestChangeForm } from 'src/redux/users/actions';
import { RULES_FORM } from 'src/rules'
import './ChangeForm.scss'

export const ChangePasswordForm = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const [isPasswordShow, setIsPasswordShow] = useState(false)
  const [password, setPassword] = useState<string>()
  const [confirmPassword, setConfirmPassword] = useState<string>()

  const token = new URLSearchParams(window.location.search).get('token')

  const toggleIsPasswordShowValue = () => {
    setIsPasswordShow(!isPasswordShow)
  }

  const onChange = (e: { target: { value: React.SetStateAction<string | undefined> } }) => {
    setConfirmPassword(e.target.value)
    setPassword(e.target.value)
  }


  const onFinish = (values: FormDataChangePassword) => {
    dispatch(requestChangeForm({password: { ...values, token}}))
    localStorage.clear()
    navigate('/')
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
            <div className='password-input-wrapper'>
                <Form.Item name="password" rules={[RULES_FORM.Password, RULES_FORM.PasswordCheck]}>
                    <Input className='input'  type={ isPasswordShow ? 'text' : 'password'} value={password} onChange={onChange} label="Password" />
                </Form.Item>
                <Button className='show-button' onClick={toggleIsPasswordShowValue}>{isPasswordShow ? 'Hide' : 'Show'}</Button>
            </div>
            <Form.Item
                name="confirm"
                dependencies={['password']}
                rules={[RULES_FORM.ConfirmPassword, matchPassword]}
            >
                <Input  className='input' type={ isPasswordShow ? 'text' : 'password'} value={confirmPassword} onChange={onChange} label="Confirm" />
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

