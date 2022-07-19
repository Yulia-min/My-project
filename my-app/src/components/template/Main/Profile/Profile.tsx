import React, { useEffect } from 'react'
import { Button, Typography } from 'antd'
import photo from 'src/public/photo.png'
import cn from 'classnames'
import './Profile.css'

export const Profile = () => {
  return (
    <div className='profile'>
        <div>
            <img alt='profile' src={photo} className={cn('default-image', 'profile-image')} />
        </div>
        <Typography.Title level={3} className='profile-name'>Jacon_marks</Typography.Title>
        <Typography.Title level={5} className='profile-email'>Jacon_marks</Typography.Title>
        <Button className='wallet-button'>View wallet</Button>
        <Button className='edit-button'>Edit profile</Button>
        <Typography.Title level={5}  className='profile-description'>Skateboarding, NFT, and Crypto fanatic from LA</Typography.Title>
    </div>
  )
}

