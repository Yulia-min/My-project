import React from 'react'
import './Tag.scss'
import {ReactComponent as Cross} from 'src/public/Cross.svg'
import { TagType } from './TagType'

export const Tag = ({ children, onClick}: TagType) => {
  return (
    <div className='filter-tag'>
        <div>{children}</div>
        <div className='tag-cross' onClick={onClick}><Cross /></div>
    </div>
  )
}




