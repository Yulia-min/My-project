import React, { useEffect } from 'react'
import logo from 'src/public/logo.png'
import wallet from 'src/public/wallet.png'
import notif from 'src/public/notif.png'
import photo from 'src/public/photo.png'
import cn from 'classnames'
import './Main.css'
import { Profile } from './Profile'
import { Tabs } from './Tabs'
import { Link } from 'react-router-dom'
import apiClient from 'src/helper/api'

export const Main = () => {

    // useEffect(() => {
    //     apiClient().get('users/4388c566-3105-4e15-b7bd-6b8b920b351f/').then((res) => console.log(res.data))
    // })
  return (
    <>
      <div className='main-header'>
          <img alt='logo' className='main-logo' src={logo} />
          <div className='main-icons'>
              <img alt='notif' className='notif' src={notif} />
              <img alt='wallet' className='wallet' src={wallet} />
              <Link to='/profile'>
                <img alt='main-profile' src={photo} className={cn('default-image', 'main-profile')} />
              </Link>
          </div>
      </div>
      <div className='line'/>
      <div className='main-wrapper'>
        <Profile />
        <Tabs />
      </div>
    </>
  )
}

