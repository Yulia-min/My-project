import React, { useEffect, useRef, useState } from 'react'
import 'antd/dist/antd.min.css'
import { Button, Form, Typography } from 'antd'
import './SignInForm.scss';
import { Link, useNavigate } from 'react-router-dom'
import { routes } from 'src/router/config/config.routes'
import { requestSignIn } from 'src/redux/users/actions'
import { RULES_FORM } from 'src/rules'
import { FormDataSigIn } from 'src/constants/Api/SignIn/SignIn.d'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getErrorInfo } from 'src/redux/users/selectors'
import { Input } from 'src/components/atoms/Input/Input';

export const SignInForm = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [form] = Form.useForm()

  const [email, setEmail] = useState<string>()
  const [isPasswordShow, setIsPasswordShow] = useState(false)
  const [password, setPassword] = useState<string>()

  const error = useAppSelector(getErrorInfo)

  const emailErrorRef = useRef(error?.username)
  const passwordErrorRef = useRef(error?.password)

  useEffect(() => {
    emailErrorRef.current = error?.username
    passwordErrorRef.current = error?.password
    if (error?.username || error?.password ) {
        form.validateFields()
    }
  }, [error])

  const onFinish = (values: FormDataSigIn) => {
    console.log('1')
    getDataPromise(values).then(() => {
      navigate('/main')
    })
  }

  const getDataPromise = async (values: FormDataSigIn) => {
    return dispatch(requestSignIn({ user: values }))
  }

  const onChange = (e: { target: { value: React.SetStateAction<string | undefined> } }) => {
    setEmail(e.target.value)
    setPassword(e.target.value)
  }

  const getEmailError = () => ({
    validator: async () => {
        if (error?.username) {
          return Promise.reject(new Error('No account found for this username. Please check your username and try again.'));
        }
      },
  })

  const getPasswordError = () => ({
    validator: async () => {
        if (error?.password) {
          return Promise.reject(new Error('The password you entered is incorrect. Try again or reset your password.'));
        }
      },
  })

  const toggleIsPasswordShowValue = () => {
    setIsPasswordShow(!isPasswordShow)
  }
  
  return (
    <>
        <Typography.Title level={2} className='title'>Please sign in.</Typography.Title>
        <Form className='form' onFinish={onFinish} form={form} >
            <Form.Item
                name="email"
                rules={[RULES_FORM.Username, getEmailError]}
            >
                <Input className='input' value={email} onChange={onChange} label="Email" />
            </Form.Item>
            <div className='password-input-wrapper'>
                <Form.Item name="password" rules={[RULES_FORM.Password, RULES_FORM.PasswordCheck, getPasswordError]}>
                    <Input className='input' type={ isPasswordShow ? 'text' : 'password'} value={password} onChange={onChange} label="Password" />
                </Form.Item>
                <Button className='show-button' onClick={toggleIsPasswordShowValue}>{isPasswordShow ? 'Hide' : 'Show'}</Button>
            </div>
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

