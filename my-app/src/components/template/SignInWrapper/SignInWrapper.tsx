import React from 'react';
import 'antd/dist/antd.min.css'
import './SignInWrapper.scss'
import logo from 'src/public/logo.png'
import { ImageSlider } from 'src/components/atoms'
import { IProps } from './SidnInModal'

export const SignInWrapper = ({children}: IProps) => {
  return (
    <div className='sign-in-wrapper'>
        <img alt='logo' className='logo' src={logo} />
        <div className='sign-in-form'>
            {children}
        </div>
        <ImageSlider />
    </div>
  )
}

