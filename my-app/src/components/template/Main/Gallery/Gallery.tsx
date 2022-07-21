import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
import './Gallery.scss'
import empty from 'src/public/empty.png'
import heart from 'src/public/heart.png'
import flag from 'src/public/flag.png'
import more from 'src/public/more.png'
import { Image } from 'src/components/atoms/Image'
import { HeartOutlined } from '@ant-design/icons'
import { Dropdown, Menu } from 'antd';

export const Gallery = () => {
    const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
                ),
            },
        ]}
     />
    )
    return (
        <div className='gallery-wrapper'>
            <Image src={empty} />
            <div className='gallery-name'>Gabriel Medina 2018 Teahupoo Champion</div>
            <div className='gallery-info'>
                <div className='gallery-info_price'>$1,299</div>
                <div className='gallery-info_icon'>
                    <img alt='heart' src={heart} />
                    <div className='likes'>12</div>
                    <img alt='flag' src={flag} />
                    <Dropdown overlay={menu} placement="bottom">
                        <img alt='more' src={more} />
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

