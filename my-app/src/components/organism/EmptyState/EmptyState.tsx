import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
import './EmptyState.scss'
import empty from 'src/public/empty.png'
import { Button } from 'antd'
import { EmptyStateType } from './EmptyStateType';

export const EmptyState = ({description, isButton, onClick}: EmptyStateType) => {
    return (
        <div className='empty-wrapper'>
            <img alt='empty' src={empty} />
            <div className='empty-descripton'>{description}</div>
            {isButton && <Button className='empty-button' onClick={onClick}>Shop now</Button> }
        </div>
  )
}

