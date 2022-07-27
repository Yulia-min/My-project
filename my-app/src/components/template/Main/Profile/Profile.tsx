import React, { useEffect, useState } from 'react'
import { Button, Typography } from 'antd'
import cn from 'classnames'
import './Profile.scss'
import noFoto from 'src/public/noFoto.png'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestUserInfo } from 'src/redux/users/actions'
import { getUserInfo } from 'src/redux/users/selectors'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { user } = useAppSelector(getUserInfo)

  useEffect(() => {
    dispatch(requestUserInfo())
  }, [])

  const showEditprofile = () => {
    navigate('/edit-user')
  }

  return (
    <div className='profile'>
        <div>
            <img alt='profile' src={user?.logo ? user?.logo : noFoto} className={cn('default-image', 'profile-image')} />
        </div>
        <Typography.Title level={3} className='profile-name'>{user?.username}</Typography.Title>
        <Typography.Title level={5} className='profile-email'>{user?.email}</Typography.Title>
        <Button className='wallet-button'>View wallet</Button>
        <Button className='edit-button' onClick={showEditprofile}>Edit profile</Button>
        <Typography.Title level={5}  className='profile-description'>{user?.about}</Typography.Title>
    </div>
  )
}

