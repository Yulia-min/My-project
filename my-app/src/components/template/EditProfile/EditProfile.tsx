import React, { useEffect, useState } from 'react'
import { Button, Typography } from 'antd'
import photo from 'src/public/photo.png'
import cn from 'classnames'
import './EditProfile.scss'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestUserInfo } from 'src/redux/users/actions'
import { getUserInfo } from 'src/redux/users/selectors'
import { EditMenu } from './EditMenu'
import { Header } from 'src/components/atoms'

export const EditProfile = () => {
//   const dispatch = useAppDispatch()

//   const { user } = useAppSelector(getUserInfo)

//   useEffect(() => {
//     dispatch(requestUserInfo())
//   }, [])

  return (
    <div >
        <Header />
        <EditMenu />
    </div>
  )
}

