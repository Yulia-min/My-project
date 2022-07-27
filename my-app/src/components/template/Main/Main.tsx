import React, { useEffect } from 'react'
import logo from 'src/public/logo.png'
import wallet from 'src/public/wallet.png'
import notif from 'src/public/notif.png'
import cn from 'classnames'
import './Main.scss'
import noFoto from 'src/public/noFoto.png'
import { Profile } from './Profile'
import { Tabs } from './Tabs'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestUserInfo } from 'src/redux/users/actions'
import { getUserInfo } from 'src/redux/users/selectors'

export const Main = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(requestUserInfo())
  }, [])

  const { user } = useAppSelector(getUserInfo)

  return (
    <>
      <div className='main-header'>
          <img alt='logo' className='main-logo' src={logo} />
          <div className='main-icons'>
              <img alt='notif' className='notif' src={notif} />
              <img alt='wallet' className='wallet' src={wallet} />
              <Link to='/profile'>
                <img alt='main-profile' src={user?.logo ? user?.logo : noFoto} className={cn('default-image', 'main-profile')} />
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

