import React from 'react'
import logo from 'src/public/logo.png'
import wallet from 'src/public/wallet.png'
import notif from 'src/public/notif.png'
import person from 'src/public/person.png'
import './MainPage.scss'

export const MainPage = () => {
  return (
    <div className='main-header'>
        <img alt='logo' className='main-logo' src={logo} />
        <div className='main-icons'>
            <img alt='notif' className='notif' src={notif} />
            <img alt='wallet' className='wallet' src={wallet} />
            <img alt='wallet' className='person' src={person} />
        </div>
    </div>
  )
}

