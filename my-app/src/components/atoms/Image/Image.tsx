import React from 'react'
import './Image.scss'
import { ImageType } from './ImageType'

export const Image = ({src}: ImageType) => {

  return (
    <div className='image-wrapper'>
        <img className='image' src={src} alt='xmint'/>
    </div>
  )
}

