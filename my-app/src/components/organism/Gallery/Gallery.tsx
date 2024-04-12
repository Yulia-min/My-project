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
import { Video } from 'src/components/atoms/Video';

export const Gallery = ({original_pic, title, price, likes, duration}: GalleryType) => {
    const [copySuccess, setCopySuccess] = useState('Copy link')
    const onClick = () => {
        navigator.clipboard.writeText('Copy link')
        setCopySuccess('Copied!')
        setTimeout(() => {
            setCopySuccess('Copy link')
        }, 2000)
    }

    const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <div onClick={onClick} className='copy'>
                        <img alt='copy' src={copy} />
                        <div className='copy_text'>{copySuccess}</div>
                    </div>
                ),
            },
        ]}
     />
    )
    return (
        <div className='gallery-wrapper'>
            {
                duration !== null ? <Video  src={original_pic} /> : <Image src={original_pic} />
            }
            <div className='gallery-name'>{title}</div>
            <div className='gallery-info'>
                <div className='gallery-info_price'>{price ? `$${price}` : ''}</div>
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

