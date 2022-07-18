import React from 'react'
import logo from 'src/public/logo.png'
import wallet from 'src/public/wallet.png'
import notif from 'src/public/notif.png'
import './MainPage.css'

export const MainPage = () => {
  return (
    <div className='main-header'>
        <img alt='logo' className='main-logo' src={logo} />
        <div className='main-icons'>
            <img alt='notif' className='notif' src={notif} />
            <img alt='wallet' className='wallet' src={wallet} />
        </div>
    </div>
  )
}

