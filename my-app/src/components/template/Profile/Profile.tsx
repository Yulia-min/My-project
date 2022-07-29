import React from 'react'
import './Profile.scss'
import { ProfileInfo } from './ProfileInfo'
import { Tabs } from './Tabs'

export const Profile = () => {

  return (
    <div className='main-wrapper'>
      <ProfileInfo />
      <Tabs />
    </div>
  )
}

