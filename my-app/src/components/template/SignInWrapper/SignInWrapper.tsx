import React, { ReactNode } from 'react';
import 'antd/dist/antd.css';
import './SignInWrapper.scss';
import { Header, ImageSlider } from 'src/components/atoms';

interface IProps {
    children: ReactNode
}

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

