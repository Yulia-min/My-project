import React, { ReactNode, useEffect, useState } from 'react'
import 'antd/dist/antd.min.css'
import { Button, Form, Input, Typography } from 'antd'
import './SignInForm.scss';
import { Link, useNavigate } from 'react-router-dom'
import { routes } from 'src/router/config/config.routes'
import { requestSignIn } from 'src/redux/users/actions'
import { RULES_FORM } from 'src/rules'
import { FormDataSigIn } from 'src/constants/Api/SignIn/SignIn.d'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getErrorInfo } from 'src/redux/users/selectors'

export const SignInForm = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const error = useAppSelector(getErrorInfo)

  const onFinish = (values: FormDataSigIn) => {
    dispatch(requestSignIn({ user: values }))
    navigate('/main')
  }

  const iconRender = (visible: ReactNode) => visible ? "Hide" : "Show"
  
  return (
    <>
        <Typography.Title level={2} className='title'>Please sign in.</Typography.Title>
        <Form className='form' onFinish={onFinish}>
            <Form.Item
                name="email"
                rules={[RULES_FORM.Username]}
            >
                <Input autoComplete="new-password" placeholder="Username or email" className='input' />
            </Form.Item>
            {error?.username && (<p className="error">{error?.username}</p>)}
            <Form.Item
                name="password"
                rules={[RULES_FORM.Password,/*  RULES_FORM.PasswordCheck */]}
            >
                <Input.Password autoComplete="new-password" placeholder="Password" className='input' iconRender={iconRender} />
            </Form.Item>   
            {error?.password && (<p className="error">{error?.password}</p>)}
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

