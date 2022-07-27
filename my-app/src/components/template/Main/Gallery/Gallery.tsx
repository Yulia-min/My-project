import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
import './Gallery.scss'
import heart from 'src/public/heart.png'
import flag from 'src/public/flag.png'
import more from 'src/public/more.png'
import { Image } from 'src/components/atoms/Image'
import { Dropdown, Menu } from 'antd'
import { GalleryType } from './GalleryType'
import copy from 'src/public/copy.png'

export const Gallery = ({original_pic, title, price, likes}: GalleryType) => {
    const onClick = () => {
        navigator.clipboard.writeText('Copy link')
    }
    const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <div onClick={onClick} className='copy'>
                        <img alt='copy' src={copy} />
                        <div>Copy Link</div>
                    </div>
                ),
            },
        ]}
     />
    )
    return (
        <div className='gallery-wrapper'>
            <Image src={original_pic} />
            <div className='gallery-name'>{title}</div>
            <div className='gallery-info'>
                <div className='gallery-info_price'>{price ? `${price}$` : ''}</div>
                <div className='gallery-info_icon'>
                    <div className='gallery-info_likes'>
                        <img alt='heart' src={heart} />
                        <div className='likes-count'>{likes}</div>
                    </div>
                    <img  className='gallery-info_flag' alt='flag' src={flag} />
                    <Dropdown overlay={menu} placement="bottom">
                        <img alt='more' src={more} />
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

