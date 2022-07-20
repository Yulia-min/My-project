import React from 'react';
import 'antd/dist/antd.min.css'
import './SignInWrapper.scss';
import { Header, ImageSlider } from 'src/components/atoms';
import { IProps } from './SidnInModal';

export const SignInWrapper = ({children}: IProps) => {
  return (
    <div className='sign-in-wrapper'>
        <Header />
        <div className='sign-in-form'>
            {children}
        </div>
        <ImageSlider />
    </div>
  )
}

