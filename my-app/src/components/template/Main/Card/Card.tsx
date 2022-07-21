import React, { useEffect } from 'react'
import { Button } from 'antd'
import xmint from 'src/public/xmint.png'
import './Card.css'
import { Image } from 'src/components/atoms/Image'
import { CardType } from './CardType'

export const Card = ({pack_artwork, title, price }: CardType) => {
  return (
    <div className='card-wrapper'>
        <Image src={pack_artwork} />
        <div className='card-info'>
            <div className='card-info_name'>{title}</div>
            <div className='card-info_price'>$ {price}</div>
        </div>
        <Button className='card-open'>
          Open drop
        </Button>
    </div>
  )
}

