import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import cn from 'classnames'
import './Profile.scss'

import noFoto from 'src/public/noFoto.png'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestUserInfo } from 'src/redux/users/actions'
import { getUserInfo } from 'src/redux/users/selectors'
import { useNavigate } from 'react-router-dom'

export const ProfileInfo = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { user } = useAppSelector(getUserInfo)

  useEffect(() => {
    user && dispatch(requestUserInfo(user.id))
  }, [])

  const showEditprofile = () => {
    navigate('/edit-user')
  }

  return (
    <div className='profile'>
        <div>
            <img alt='profile' src={user?.logo ? user?.logo : noFoto} className={cn('default-image', 'profile-image')} />
        </div>
        <div className='profile-name'>{user?.username}</div>
        <div className='profile-email'>{user?.email}</div>
        <Button className='wallet-button'>View wallet</Button>
        <Button className='edit-button' onClick={showEditprofile}>Edit profile</Button>
        <div  className='profile-description'>{user?.about}</div>
    </div>
  )
}

