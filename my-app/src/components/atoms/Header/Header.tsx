import React from 'react';
import 'antd/dist/antd.css';
import './Header.scss';
import logo from 'src/public/logo.png'

export const Header = () => {
  return (
    <div className='header'>
        <img alt='logo' className='logo' src={logo} />
    </div>
  )
}

