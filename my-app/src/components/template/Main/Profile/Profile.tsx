import React, { useEffect, useState } from 'react'
import { Button, Typography } from 'antd'
import photo from 'src/public/photo.png'
import cn from 'classnames'
import './Profile.css'
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
    console.log(user)
    navigate('/edit-user')
  }

  return (
    <div className='profile'>
        <div>
            <img alt='profile' src={photo} className={cn('default-image', 'profile-image')} />
        </div>
        <Typography.Title level={3} className='profile-name'>{user?.username}</Typography.Title>
        <Typography.Title level={5} className='profile-email'>{user?.email}</Typography.Title>
        <Button className='wallet-button'>View wallet</Button>
        <Button className='edit-button' onClick={showEditprofile}>Edit profile</Button>
        <Typography.Title level={5}  className='profile-description'>Skateboarding, NFT, and Crypto fanatic from LA</Typography.Title>
    </div>
  )
}

